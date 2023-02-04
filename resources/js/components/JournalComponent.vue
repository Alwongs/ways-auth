<template>
    <ul class="journal-component">
        <li
            v-for="waybill in waybills"
            :key="waybill.id" 
            :data="waybill" 
            class="journal-component__item"
        >
            <div class="journal-component__item-number">{{ waybill.number }}.</div>
            <div class="journal-component__item-car-number">{{ waybill.car_number }}</div>
            <div class="journal-component__item-name">{{ waybill.full_name }}</div>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'JounalComponent',
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

.journal-component {
    &__item {
        border-bottom: 1px solid rgb(182, 182, 182);
        font-size: 12px;
        margin-bottom: 4px;
        display: flex;
    }
    &__item-number {
        color: red;
        flex: 0 0 30px;
    }
    &__item-car-number {
        background-color: #fff;
        border: 1px solid black;
        border-radius: 3px;
        font-size: 10px;
        text-align: center;
        color: black;
        font-weight: 700;
        flex: 0 0 72px;
        margin-right: 4px;
    }
    &__item-name {
        flex: 0 1 240px;
        padding: 0 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
