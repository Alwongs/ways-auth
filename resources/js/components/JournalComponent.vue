<template>
    <ul class="journal-component">
        <li
            v-for="waybill in data"
            :key="waybill.id" 
            :data="waybill" 
            class="journal-component__item"
        >
            <div class="journal-component__item-number">{{ waybill.number }}.</div>
            <div class="journal-component__item-car-number">{{ waybill.car_number }}</div>
            <div class="journal-component__item-name">{{ waybill.full_name }}</div>
            <div class="journal-component__item-del" @click="deleteWaybill(waybill.id)">&#10006;</div>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'JounalComponent',
    props: ['data'],
    methods: {
        deleteWaybill(id) {
            if (confirm('Вы действительно хотите удалить автомобиль?')) {
                axios.post('/api/V1/waybills/' + id, {
                    _method: 'DELETE'
                })
                .then(response => {
                    this.$emit('updateJournal')
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => {
                    this.loading = false           
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.journal-component {
    &__item {
        border-bottom: 1px solid rgb(182, 182, 182);
        font-size: 12px;
        height: 18px;
        margin-bottom: 4px;       
        display: flex;
    }
    &__item-number {
        color: rgb(136, 0, 0);
        flex: 0 0 25px;
    }
    &__item-car-number {
        font-size: 12px;
        text-align: center;
        color: blue;
        line-height: 18px;
        flex: 0 0 72px;
        margin-right: 4px;
        text-transform: lowercase;
    }
    &__item-name {
        flex: 0 1 240px;
        padding: 0 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &__item-del {
        border: 1px solid transparent; 
        height: 16px;
        width: 16px; 
        text-align: center;
        line-height: 16px;
        color: rgb(166, 0, 0);
        cursor: pointer;
        &:hover {
            color: rgb(255, 0, 0);   
            border: 1px solid red;        
        }
    }
}
</style>
