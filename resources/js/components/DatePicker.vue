<template>
    <div class="relation-form__item-date">
        <div class="relation-form__item">
            <label for="">дата выезда: </label>
            <input v-model="day" type="text" class="relation-form__item-day">
            <input v-model="month" type="text" class="relation-form__item-month">
            <input v-model="year" type="text" class="relation-form__item-year">
        </div>
    </div>  
</template>

<script>
export default {
    name: 'DatePicker',
    data() {
        return {
            day: '',
            month: '',
            year: ''
        }
    }
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

.relation-form {
    border: 1px solid rgb(179, 179, 179);
    width: 100%;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;  
    label {
        font-size: 13px;
        flex: 90px 0 0; 
        margin-right: 8px;    
    } 
    input {
        height: 30px;
        padding: 0 8px;
        margin-right: 8px;
        font-size: 15px;
        text-align: center;
        border-radius: 4px; 
        border: none; 
        color: $content-color;      
    }
    &__item {
        position: relative;
        margin-bottom: 12px;
        display: flex;
        // justify-content: flex-end;
        align-items: center;
    }
    &__item-date {

    }
    &__item-day {
        border: 1px solid blue;
        width: 40px;
        margin-right: 8px;
        input {
            width: 100%;
        }
    }
    &__select-day {
        background-color: rgb(185, 230, 244);
        height: 100px;
        position: absolute;
        z-index: 2;
        width: 40px;

    }
    &__item-month {
        border: 1px solid blue;        
        width: 100px;
        text-align: center;
        margin-right: 8px;
        input {
            width: 100%;
        }        
    }
    &__item-year {
        border: 1px solid blue;        
        width: 60px;
        input {
            width: 100%;
        }        
    }
}
</style>