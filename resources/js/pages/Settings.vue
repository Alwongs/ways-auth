<template>
    <div class="page settings-page">
        <h1 class="page__title">Настройки</h1>      
        <app-loader v-if="loading" />
        <error-notification v-if="errored" />


        <div class="setting-form">

            <div class="setting-form__date">
                <div class="setting-form__item">
                    <label for="">Дата выезда: </label>
                    <date-picker 
                        :date="dateFrom"
                        @updateDay="updateDayFrom"
                        @updateMonth="updateMonthFrom"
                        @updateYear="updateYearFrom"                  
                    />                
                </div>

                <div class="setting-form__item">
                    <label for="">Дата заезда: </label>
                    <date-picker 
                        v-if="!isSameDate"
                        :date="dateTo"
                        @updateDay="updateDayTo"
                        @updateMonth="updateMonthTo"
                        @updateYear="updateYearTo"
                    />  
                    <a v-if="!isSameDate" href="#" @click="makeSameDate">Заезд в тот же день</a>              
                    <a v-if="isSameDate" href="#" @click="makeDiffDate">Добавить дату заезда</a>              
                </div>
            </div>


            <div class="setting-form__item">
                <label for="">заказчик: </label>
                <input 
                    v-model="customer" 
                    type="text" 
                    required
                    class="setting-form__customer" 
                >
            </div>

            <div class="setting-form__item">
                <label for="">адрес подачи: </label>
                <input 
                    v-model="address" 
                    type="text" 
                    required
                    class="setting-form__address" 
                >
            </div>

            <div class="setting-form__item">
                <label for="">диспетчер: </label>
                <input 
                    v-model="dispetcherFullName" 
                    type="text" 
                    readonly
                    class="setting-form__mechanic" 
                    @click="toggleDispetcherList"
                >
                <ul 
                    v-if="isDispetcherListOpen" 
                    class="setting-form__drop-list"
                >
                    <li class="close-btn" @click="toggleDispetcherList">x</li>
                    <li 
                        v-for="driver in driverList" 
                        :key="driver.id" 
                        class="setting-form__drop-item"
                        @click="selectDispetcher(driver)"
                    >
                        {{ driver.last_name }} {{ driver.first_name }} {{ driver.middle_name }}
                    </li>
                </ul>
            </div>

            <div class="setting-form__item">
                <label for="">механик: </label>
                <input 
                    v-model="mechanicFullName" 
                    type="text" 
                    readonly
                    class="setting-form__mechanic" 
                    @click="toggleMechanicList"
                >
                <ul 
                    v-if="isMechanicListOpen" 
                    class="setting-form__drop-list"
                >
                    <li class="close-btn" @click="toggleMechanicList">x</li>                
                    <li 
                        v-for="driver in driverList" 
                        :key="driver.id" 
                        class="setting-form__drop-item"
                        @click="selectMechanic(driver)"
                    >
                        {{ driver.last_name }} {{ driver.first_name }} {{ driver.middle_name }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="app-btn-group">
            <button 
                class="app-btn app-btn__back mr-16" 
                @click.prevent="goBack"
            >
                Назад
            </button>             
            <button 
                class="app-btn app-btn__save" 
                @click.prevent="updateSetting"
            >
                Сохранить
            </button>
        </div>
    </div>
</template>

<script>
import DatePicker from '../components/DatePicker.vue';

export default {
    name: 'Settings',
    components: { DatePicker },
    data() {
        return {
            errored: false,
            loading: true,

            isMechanicListOpen: false,
            isDispetcherListOpen: false,
            isSameDate: false,
            
            driverList: [],

            dateFrom: {
                day: '',
                month: '',
                year: ''
            },
            dateTo: {
                day: '',
                month: '',
                year: ''
            },

            settingId: null,
            customer: '',
            address: '',            
            dispetcher: {},
            mechanic: {},            
        }
    },   
    computed: {
        dispetcherFullName() {
            return `${this.dispetcher.last_name} ${this.dispetcher.first_name} ${this.dispetcher.middle_name}` || '';
        },
        mechanicFullName() {
            return `${this.mechanic.last_name} ${this.mechanic.first_name} ${this.mechanic.middle_name}` || '';
        },
    },      
    mounted() {
        this.getSettings();
        this.getAllDrivers();
    },
    methods: {
        getSettings() {
            axios.get('/api/V1/settings')
            .then(response => {
                let setting = response.data.data[0];
                
                this.settingId = setting.id;  
                
                this.dateFrom = JSON.parse(setting.date_from); 
                this.dateTo = JSON.parse(setting.date_to); 
                this.customer = setting.customer;       
                this.address = setting.address; 
                this.dispetcher = JSON.parse(setting.dispetcher);       
                this.mechanic = JSON.parse(setting.mechanic); 

                if (this.dateFrom.day === this.dateTo.day && this.dateFrom.month === this.dateTo.month && this.dateFrom.year === this.dateTo.year) {
                    this.isSameDate = true;
                }
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false;            
            })
        },
        
        getAllDrivers() {
            axios.get('/api/V1/drivers')
            .then(response => {
                this.driverList = response.data.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })             
        }, 

        toggleDispetcherList() {
            this.isDispetcherListOpen = !this.isDispetcherListOpen
        }, 
        toggleMechanicList() {
            this.isMechanicListOpen = !this.isMechanicListOpen
        },

        selectDispetcher(dispetcher) {
            this.dispetcher = dispetcher;
            this.isDispetcherListOpen = false;
        },        
        selectMechanic(mechanic) {
            this.mechanic = mechanic;
            this.isMechanicListOpen = false;
        },

        updateSetting() { 
            this.loading = true;           
            axios.post('/api/V1/settings/' + this.settingId, {
                _method: 'PUT',

                date_from: JSON.stringify(this.dateFrom),
                date_to: JSON.stringify(this.dateTo),
                customer: this.customer,
                address: this.address,
                dispetcher: JSON.stringify(this.dispetcher),
                mechanic: JSON.stringify(this.mechanic),
            })
            .then(response => {

            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })            
        }, 
        
        
        updateDayFrom(day) {
            this.dateFrom.day = day
        },
        updateMonthFrom(month) {
            this.dateFrom.month = month
        },
        updateYearFrom(year) {
            this.dateFrom.year = year
        },
        updateDayTo(day) {
            this.dateTo.day = day
        },
        updateMonthTo(month) {
            this.dateTo.month = month
        },
        updateYearTo(year) {
            this.dateTo.year = year
        },

        makeSameDate() {
            this.dateTo = this.dateFrom;
            this.isSameDate = true;
        },
        makeDiffDate() {
            this.dateTo = { ...this.dateFrom };  
            this.isSameDate = false;
        },        

        goBack() {
            this.$router.go(-1);
        },                       
    }
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

.settings-page {
    width: 900px;
}
.setting-form {
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
        height: 32px;
        padding: 0 8px;
        margin-right: 8px;
        font-size: 15px;
        text-align: center;
        border-radius: 4px; 
        border: none; 
        color: $content-color; 
        flex-grow: 1;     
    }
    a {
        color: green;
    }
    &__date {
        border: 1px dotted grey;
        border-radius: 5px;
        padding: 8px 16px 0 16px;
        margin-bottom: 24px;
    }
    &__item {
        position: relative;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
    }

    &__mechanic {
        width: 350px;
        letter-spacing: 1px;
        cursor: default;
    }
    &__customer {
        width: 400px;
        letter-spacing: 1px;
    }
    &__address {
        letter-spacing: 1px;
        flex: 400px 0 1;
    }
    &__drop-list {
        background-color: #fff;
        position: absolute;
        z-index: 1;
        width: 350px;
        top: 32px;
        right: 64px;
        border: 1px solid black;
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        padding: 4px 0;
    }
    &__drop-item {
        text-align: start;
        padding: 8px;
        cursor: pointer;
        &:hover {
            background-color: rgb(217, 217, 217);
        }
    }
}
.close-btn {
    text-align: end;
    padding-right: 8px;
    cursor: pointer;
}
</style>
