<template>
    <div class="journal-table-row">
        <div class="journal-table-row__column-1">{{ data.number }}</div>
        <div class="journal-table-row__column-2">{{ data.date }}</div>
        <div class="journal-table-row__column-3">{{ data.full_name }}</div>
        <div class="journal-table-row__column-4">{{ data.person_number }}</div>
        <div class="journal-table-row__column-5">{{ data.car_number }}</div>
        <div class="journal-table-row__column-6"></div>
        <div class="journal-table-row__column-7"></div>
        <div class="journal-table-row__column-8"></div>
        <div class="journal-table-row__column-9">
            <span @click="deleteWaybill(data.id)">Удалить</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'JournalTableNumbers',
    props: [
        'data'
    ],
    methods: {
        deleteWaybill(id) {
            if (confirm('Вы действительно хотите удалить запись?')) {
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

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

$border-color: rgb(190, 190, 190);
$border-thin: 1px;
$border-middle: 2px;
$border-bold: 2.5px;
@mixin border($top, $right, $bottom, $left) {
    border-color: $border-color;
    border-style: solid;
    border-width: $top $right $bottom $left; 
}


.journal-table-row {
    font-size: 12px;    
    margin: 0 0 0 30px;        
    width: 903px;
    @include border(0, $border-middle, $border-middle, $border-middle);
    display: flex;
    text-align: center;  
    height: 20px;  
    &__column-1 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 55px;
    }
    &__column-2 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 104px;  
    }
    &__column-3 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 256px;
    }
    &__column-4 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 74px;
    }
    &__column-5 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 86px; 
    }
    &__column-6 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 90px;
    }
    &__column-7 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 110px;
    }
    &__column-8 {
        @include border(0, $border-middle, 0, 0);         
        flex: 0 0 74px;
    }
    &__column-9 {     
        position: relative;   
        flex: 0 0 52px;
        cursor: pointer;
        span {
            position: absolute;
            left: 58px;
            top: 0;
            color: rgb(222, 0, 0);
        }
    }
}
</style>