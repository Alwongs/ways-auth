<template>
    <div class="relation">
        <!-- Modals -->
        <div v-if="isPrintOpen" class="background-print-document">
            <div class="background-print-document__header">                 
                <button class="app-btn close-btn" @click="togglePrintDocument">Закрыть</button>
                <button class="app-btn app-btn__print close-btn" @click="printDocument">Печать</button>
            </div>
            <print-document 
                :model="car.model"
                :number="car.number"
                :fuel="car.fuel"
                :last_name="driver.last_name"
                :first_name="driver.first_name"
                :middle_name="driver.middle_name"
                :person_number="driver.person_number"
                :driver_license="driver.driver_license"
                :mechanic="selectedMechanic"
                :dispetcher="selectedDispetcher"
                :waybillNumber="waybillNumber"
                :date="formatDate(dateFrom, dateTo)"
                :customer="customer"
                :address="address"
            />
        </div>
        <div v-if="isPrintBackOpen" class="background-print-document">
            <div class="background-print-document__header">
                <button class="app-btn close-btn" @click="printBackSide">Печать</button>                 
                <button class="app-btn close-btn" @click="togglePrintBack">Закрыть</button>
            </div>
            <print-back-side />
        </div>
        <!-- /Modals -->

        <div class="relation__title-car">
            {{ car.model }} - <span class="relation__car-number">{{ car.number }}</span>
        </div>
        <div class="relation__title-driver">
            {{ driver.last_name }} {{ driver.first_name }} {{ driver.middle_name }}                
        </div>

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="relation-content">
            <div>вод. удостоверение: <span>{{ driver.driver_license}}</span></div>
            <div>табельный номер: <span>{{ driver.person_number}}</span></div>
            <div>Марка топлива: <span>{{ car.fuel }}</span></div>
        </div>    

        <div class="relation-form">
            <date-picker />







            <div class="relation-form__item waybill">
                <label for="">№ п. листа: </label>
                <input v-model="waybillNumber" type="text">
            </div>
            <div class="relation-form__item-date">

                <div class="relation-form__item">
                    <label for="">дата заезда: </label>
                    <input v-model="dateFrom.day" type="text" class="relation-form__item-day">
                    <input v-model="dateFrom.month" type="text" class="relation-form__item-month">
                    <input v-model="dateFrom.year" type="text" class="relation-form__item-year">
                </div>
                <div class="relation-form__item">
                    <label for="">дата заезда: </label>
                    <input v-model="dateTo.day" type="text" class="relation-form__item-day">
                    <input v-model="dateTo.month" type="text" class="relation-form__item-month">
                    <input v-model="dateTo.year" type="text" class="relation-form__item-year">
                </div>
            </div>

            <div class="relation-form__item mechanic">
                <label for="">заказчик: </label>
                <input 
                    v-model="customer" 
                    type="text" 
                    class="relation-form__customer" 
                >
            </div>

            <div class="relation-form__item mechanic">
                <label for="">адрес подачи: </label>
                <input 
                    v-model="address" 
                    type="text" 
                    class="relation-form__address" 
                >
            </div>

            <div class="relation-form__item mechanic">
                <label for="">механик: </label>
                <input 
                    v-model="mechanicFullName" 
                    type="text" 
                    readonly
                    class="relation-form__mechanic" 
                    @click="toggleMechanicList"
                >
                <ul 
                    v-if="isMechanicListOpen" 
                    class="relation-form__drop-list"
                >
                    <li class="closeBtn" @click="toggleMechanicList">x</li>                
                    <li 
                        v-for="mechanic in mechanicList" 
                        :key="mechanic.id" 
                        class="relation-form__drop-item"
                        @click="selectMechanic(mechanic)"
                    >
                        {{ mechanic.last_name }} {{ mechanic.first_name }} {{ mechanic.middle_name }}
                    </li>
                </ul>
            </div>
            <div class="relation-form__item dispetcher">
                <label for="">диспетчер: </label>
                <input 
                    v-model="dispetcherFullName" 
                    type="text" 
                    readonly
                    class="relation-form__mechanic" 
                    @click="toggleDispetcherList"
                >
                <ul 
                    v-if="isDispetcherListOpen" 
                    class="relation-form__drop-list"
                >
                    <li class="closeBtn" @click="toggleDispetcherList">x</li>
                    <li 
                        v-for="dispetcher in dispetcherList" 
                        :key="dispetcher.id" 
                        class="relation-form__drop-item"
                        @click="selectDispetcher(dispetcher)"
                    >
                        {{ dispetcher.last_name }} {{ dispetcher.first_name }} {{ dispetcher.middle_name }}
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
                class="app-btn app-btn__print" 
                @click="togglePrintDocument"
            >
                Распечатать
            </button>       
            <button 
                class="app-btn app-btn__print" 
                @click="togglePrintBack"
            >
                Обр. сторона
            </button> 
        </div>      
    </div>
</template>

<script>
import PrintDocument from '../../components/PrintDocument.vue';
import PrintBackSide from '../../components/PrintBackSide.vue';
import DatePicker from '../../components/DatePicker.vue';

export default {
    name: 'OneRelation',
    components: { 
        PrintDocument,
        PrintBackSide,
        DatePicker 
    },
    props: ['relationId'],
    data() {
        return {
            errored: false,
            loading: true,
            isPrintOpen: false,
            isPrintBackOpen: false,
            isMechanicListOpen: false,
            isDispetcherListOpen: false,

            relation: {},
            car: {},
            driver: {},
            mechanicList: [],
            dispetcherList: [],

            waybillNumber: '',
            dateFrom: {
                day: '25',
                month: 'Октября',
                year: '2023'
            },
            dateTo: {
                day: '27',
                month: 'Декабря',
                year: '2024'
            },
            customer: 'ООО АК "Волга-Днепр"',
            address: 'г. Ульяновск, ул. Карбышева, д. 14',            
            selectedMechanic: {
                last_name: 'Братышев',
                first_name: 'Александр',
                middle_name: 'Сергеевич',
            },
            selectedDispetcher: {
                last_name: 'Асташов',
                first_name: 'Дмитирий',
                middle_name: 'Васильевич',
            },
        }
    },
    computed: {
        mechanicFullName() {
            if (this.selectedMechanic.last_name) {
                return `${this.selectedMechanic.last_name} ${this.selectedMechanic.first_name} ${this.selectedMechanic.middle_name}`;
            }
            return '';
        },
        dispetcherFullName() {
            if (this.selectedDispetcher.last_name) {
                return `${this.selectedDispetcher.last_name} ${this.selectedDispetcher.first_name} ${this.selectedDispetcher.middle_name}`;
            }
            return '';
        }
    },    
    methods: {      
        goBack() {
            this.$router.go(-1);
        },
        formatDate(dateFrom, dateTo) {
            let day = '';
            let month = '';
            let year = '';
            if (dateTo.day !== dateFrom.day) {
                day = dateFrom.day + '-' + dateTo.day;
            } else day = dateFrom.day;

            if (dateTo.month !== dateFrom.month) {
                month = dateFrom.month + '-' + dateTo.month;
            } else month = dateFrom.month;

            if (dateTo.year !== dateFrom.year) {
                year = dateFrom.year + '-' + dateTo.year;
            } else year = dateFrom.year;

            return { day, month, year }
        },
        selectMechanic(mechanic) {
            this.selectedMechanic = mechanic;
            this.isMechanicListOpen = false;
        },
        selectDispetcher(dispetcher) {
            this.selectedDispetcher = dispetcher;
            this.isDispetcherListOpen = false;
        },
        toggleMechanicList() {
            this.isMechanicListOpen = !this.isMechanicListOpen
        },
        toggleDispetcherList() {
            this.isDispetcherListOpen = !this.isDispetcherListOpen
        },
        getAllMechanics() {
            axios.get('/api/V1/drivers')
            .then(response => {
                const driverList = response.data.data;
                this.mechanicList = this.selectAllMechanics(driverList);
                this.dispetcherList = this.mechanicList;
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })
        },
        togglePrintDocument() {
            this.isPrintOpen = !this.isPrintOpen;
        },
        togglePrintBack() {
            this.isPrintBackOpen = !this.isPrintBackOpen;
        },
        printDocument() {
            const body = document.querySelector('body');
            const bodyContent = body.innerHTML;
            const el = document.querySelector('.print');

            body.innerHTML = el.innerHTML;
            window.print();
            body.innerHTML = bodyContent; 

            this.$router.go();          
        },       
        printBackSide() {
            const body = document.querySelector('body');
            const bodyContent = body.innerHTML;
            const el = document.querySelector('.print-back');

            body.innerHTML = el.innerHTML;
            window.print();
            body.innerHTML = bodyContent; 

            this.$router.go();          
        },       
        getOneRelation() {
            axios.get('/api/V1/relations/' + this.relationId)
            .then(response => {
                this.relation = response.data.data;
                this.getCar(this.relation.car_id);
                this.getDriver(this.relation.driver_id);                
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            }) 
        },
        getCar(id) {
            axios.get('/api/V1/cars/' + id)
            .then(response => {
                this.car = response.data.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })             
        },
        getDriver(id) {
            axios.get('/api/V1/drivers/' + id)
            .then(response => {
                this.driver = response.data.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })             
        },
        selectAllMechanics(drivers) {
            let mechanics = [];
            drivers.map(driver => {
                if (driver.is_mechanic) {
                    mechanics.push(driver);
                }
            })
            return mechanics;
        }
    },    
    mounted() {
       this.getOneRelation();
       this.getAllMechanics();
    }
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

.relation {
    position: relative;
    padding: 64px 32px;
    &__title-car {
        font-weight: 700;
        color: rgb(138, 0, 0);
        font-size: 20px;
        margin-bottom: 16px;
    }
    &__title-driver {
        font-weight: 700;
        font-size: 22px; 
        text-align: center;
        color: $content-color;
        margin-bottom: 16px;         
    }
    &__car-number {
        text-transform: lowercase;
        border: 1.5px solid black;
        border-radius: 4px;
        background-color: #fff;
        padding: 0 4px;
        color: black;
    }
}
.relation-content {
    border: 1px solid lightgrey;
    width: fit-content;
    border-radius: 10px;
    // padding: 16px;
    margin-bottom: 16px;
    span {
        font-weight: 700;
        color: $content-color;
        margin-left: 4px; 
    }
}
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
.background-print-document {
    background-color: $bg-color;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    height: fit-content;
    &__header {
        display: flex;
        justify-content: center;
        padding-top: 16px;
        margin-bottom: 16px;        
    }
    button:not(:last-child) {
        margin-right: 16px;
    }
}
.close-btn {
    color: black;
}
.closeBtn {
    text-align: end;
    padding-right: 8px;
    cursor: pointer;
}
</style>