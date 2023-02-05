<template>
    <div class="journal">
        <h1 class="page__title">Журнал</h1> 
        <div class="link-group">
            <span class="link-group__print" @click="printJournal">Печать</span>
            <span class="link-group__clear" @click="clearJournal">Очистить журнал</span>
        </div>  

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="journal-table print-journal">

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
        printJournal() {           
            const body = document.querySelector('body');
            const bodyContent = body.innerHTML;
            const el = document.querySelector('.print-journal');

            body.innerHTML = el.innerHTML;
            window.print();
            body.innerHTML = bodyContent; 
            // this.$router.go(); 
        },    
        clearJournal() {
            if (confirm('Внимание! Все записи будут удалены!')) {
                axios.get('/api/V1/clear')
                .then(response => {
            
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => {
                    this.loading = false 
                    this.getJournal();            
                })
            }
        },
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

.link-group {
    display: flex;
    justify-content: space-between;
    width: 903px;
    margin: 0 auto 5px;
    &__print {
        color: blue;
    }
    &__clear {
        color: rgb(161, 0, 0);
    }
    span:hover {
        width: fit-content;
        color: red;
        cursor: pointer;
    }
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
