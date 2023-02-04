<template>
    <div class="journal">
        <h1 class="page__title">Журнал</h1>   

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="journal-table">
            <journal-table-header />
            <journal-table-numbers />

            <journal-table-row 
                v-for="waybill in waybills"
                :key="waybill.id" 
                :data="waybill"               
            />
        </div>
    </div>
</template>

<script>
import JournalTableHeader from '../../components/JournalTableHeader.vue';
import JournalTableNumbers from '../../components/JournalTableNumbers.vue';
import JournalTableRow from '../../components/JournalTableRow.vue';

export default {
    name: 'Journal',
    components: { 
        JournalTableHeader, 
        JournalTableNumbers,
        JournalTableRow
    },
    data() {
        return {
            errored: false,
            loading: true,

            waybills: []
        }
    },
    mounted() {
        this.getJournal();
    },
    methods: {
        getJournal() {
            axios.get('/api/V1/waybills')
            .then(response => {
                this.waybills = response.data.data           
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false             
            })
        },
    } 
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

$border-color: black;
$border-thin: 1px;
$border-middle: 2px;
$border-bold: 2.5px;
@mixin border($top, $right, $bottom, $left) {
    border-color: $border-color;
    border-style: solid;
    border-width: $top $right $bottom $left; 
}

.journal {
    position: relative;
    padding: 64px 32px;
}

.journal-table {
    font-family: 'Arial Cyr', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;  
    font-size: 12px;  
    background-color: #fff;
    width: fit-content;
    margin: 0 auto;
}
</style>
