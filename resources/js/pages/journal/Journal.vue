<template>
    <div class="journal">
        <h1 class="page__title">Журнал</h1>   

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <ul class="waybill-list">
            <li 
                v-for="(waybill, index) in waybills" 
                :key="waybill.id" 
                class="waybill-list__item"
            >     
            {{ index + 1 }}. {{ waybill.number }} - {{ waybill.date }} - {{ waybill.full_name }} - {{ waybill.person_number }} - {{ waybill.car_number }} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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

.journal {
    position: relative;
    padding: 64px 32px;
}

.waybill-list {
    &__item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding: 6px;
        &:hover {
            background-color: rgb(208, 234, 246);
        } 
    }
    &__devider {
        border-bottom: 1px dotted black;
        flex-grow: 1;
        margin: 0 16px;
        height: 32px;
        cursor: pointer;
    }
    &__number {
        text-transform: lowercase;
        border: 1.5px solid black;
        border-radius: 4px;
        background-color: #fff;
        margin-left: 8px;
        padding: 0 4px;
        color: black;
    }
}
</style>
