<template>
    <div class="date-picker">
        <div class="date-picker__item date-picker__day">
            <input v-model="day" type="text" @click="toggleDayList" placeholder="День">   
            <ul v-if="isDayListOpen" class="date-picker__drop-day">
                <li v-for="n in 31" :key="n" @click="selectDay(n)">{{ n }}</li>
            </ul>         
        </div>
        <div class="date-picker__item date-picker__month">
            <input v-model="month" type="text" @click="toggleMonthList" placeholder="Месяц">
            <ul v-if="isMonthListOpen" class="date-picker__drop-month">
                <li v-for="month in monthList" :key="month" @click="selectMonth(month)">{{ month }}</li>
            </ul>             
        </div>
        <div class="date-picker__item date-picker__year">
            <input v-model="year" type="text" @click="toggleYearList" placeholder="Год">
            <ul v-if="isYearListOpen" class="date-picker__drop-year">
                <li v-for="year in yearList" :key="year" @click="selectYear(year)">{{ year }}</li>
            </ul>             
        </div>
    </div>  
</template>

<script>
export default {
    name: 'DatePicker',
    data() {
        return {
            isDayListOpen: false,
            isMonthListOpen: false,
            isYearListOpen: false,

            monthList: [
                'Января',
                'Февраля',
                'Марта',
                'Апреля',
                'Мая',
                'Июня',
                'Июля',
                'Августа',
                'Сентября',
                'Октября',
                'Ноября',
                'Декабря'
            ],
            yearList: [
                '2023',
                '2024',
                '2025',
                '2026',
                '2027',
                '2028',
                '2029',
            ],

            day: '',
            month: '',
            year: ''
        }
    }, 
    methods: {

        toggleDayList() {
            this.isDayListOpen = !this.isDayListOpen;
            this.isMonthListOpen = false;  
            this.isYearListOpen = false;                      
        },
        toggleMonthList() {
            this.isMonthListOpen = !this.isMonthListOpen;
            this.isDayListOpen = false;  
            this.isYearListOpen = false;  
        },
        toggleYearList() {
            this.isYearListOpen = !this.isYearListOpen; 
            this.isDayListOpen = false; 
            this.isMonthListOpen = false;  
        },

        selectDay(day) {
            this.day = day;
            this.$emit('updateDay', this.day)
            this.isDayListOpen = false;            
        },
        selectMonth(month) {
            this.month = month;
            this.$emit('updateMonth', this.month)            
            this.isMonthListOpen = false;            
        },
        selectYear(year) {
            this.year = year;
            this.$emit('updateYear', this.year)              
            this.isYearListOpen = false;            
        },
    }
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

.date-picker {
    display: flex;
    &__item {
        margin-right: 8px;
    }
    &__day {
        width: 40px;
    }
    &__month {
        width: 100px;
    }  
    &__year {
        width: 60px;
    }

    &__drop-day {
        width: 55px;
    }
    &__drop-month {
        width: 115px;
    }  
    &__drop-year {
        width: 75px;
    }    
    input {
        width: 100%;
        height: 32px;
        font-size: 16px;   
        color: $content-color;
        text-align: center; 
        border-radius: 4px;          
        border: none; 
        outline: none;
        &::placeholder {
            font-size: 12px;
        }
    }
    ul {
        position: absolute;
        z-index: 2;
        background-color: #fff;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);        

        text-align: center;
        color: $content-color;
        height: 150px;
        overflow: hidden;
        overflow-y: scroll;
    }
    li:hover {
        background-color: rgb(150, 189, 213);
        color: white;
        cursor: pointer;
    }
}
</style>