<template>
    <div class="relation-page">
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
                    :mechanic="mechanic"
                    :dispetcher="dispetcher"
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

            <div class="relation__title">
                <span class="relation__title-car">{{ car.model }}</span> - <span class="relation__car-number">{{ car.number }}</span>
            </div>
            <div class="relation__title-driver">
                {{ driver.last_name }} {{ driver.first_name }} {{ driver.middle_name }}                
            </div>

            <app-loader v-if="loading" />
            <error-notification v-if="errored" />

            <div class="relation-form">
                <div class="relation-form__item waybill">
                    <label for="">№ п. листа: </label>
                    <input v-model="waybillNumber" type="text">
                </div>

                <div class="relation-form__item">
                    <label>Дата выезда: </label>             
                    <p class="relation-form__date">{{ dateFrom.day }} {{ monthList[dateFrom.month - 1] }} 20{{ dateFrom.year }}  <router-link :to="{name: 'settings'}"> - Изменить</router-link> </p>               
                </div>

                <div class="relation-form__item">
                    <label>Дата заезда: </label>             
                    <p class="relation-form__date">{{ dateTo.day }} {{ monthList[dateTo.month - 1] }} 20{{ dateTo.year }}</p>             
                </div>

                <div class="relation-form__item">
                    <a v-if="!showDetails" href="#" @click="showDetails = !showDetails">Подробнее:</a>
                    <a v-if="showDetails" href="#" @click="showDetails = !showDetails">Скрыть:</a>
                </div>                    

                <div v-if="showDetails">
                    <div class="relation-form__item">
                        <label for="">Заказчик: </label>             
                        <p for="">{{ customer }}</p>             
                    </div>
                    <div class="relation-form__item">
                        <label for="">Адрес: </label>             
                        <p for="">{{ address }}</p>             
                    </div>
                    <div class="relation-form__item">
                        <label for="">Диспетчер: </label>             
                        <p for="">{{ dispetcherShortName }}</p>             
                    </div>
                    <div class="relation-form__item">
                        <label for="">Механик: </label>             
                        <p for="">{{ mechanicShortName }}</p>             
                    </div>
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
                    Печать
                </button>       
                <button 
                    class="app-btn app-btn__print" 
                    @click="togglePrintBack"
                >
                    Обр. сторона
                </button> 
            </div>      
        </div>

        <div class="relation-page__journal">
            <h3 class="relation-page__journal-title">Журнал</h3>
            <p v-if="loading">Загрузка журнала ...</p>
            <journal-component 
                :data="waybills" 
                @updateJournal="getJournal"
            />
        </div>
    </div>
</template>

<script>
import PrintDocument from '../../components/PrintDocument.vue';
import PrintBackSide from '../../components/PrintBackSide.vue';
import JournalComponent from '../../components/JournalComponent.vue';

export default {
    name: 'OneRelation',
    components: { 
        PrintDocument,
        PrintBackSide,
        JournalComponent
    },
    props: ['relationId'],
    data() {
        return {
            errored: false,
            loading: false,
            isPrintOpen: false,
            isPrintBackOpen: false, 
            showDetails: false,           

            relation: {},
            car: {},
            driver: {},

            waybills: [],

            waybillNumber: '',

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

            customer: '',
            address: '',            
            dispetcher: {},
            mechanic: {}, 
        }
    }, 
    computed: {
        dispetcherShortName() {
            if (this.dispetcher.last_name) {
                return `${this.dispetcher.last_name} ${this.dispetcher.first_name[0]} ${this.dispetcher.middle_name[0]}`
            } else '';
        },
        mechanicShortName() {
            if (this.mechanic.last_name) {
                return `${this.mechanic.last_name} ${this.mechanic.first_name[0]} ${this.mechanic.middle_name[0]}`
            } else '';
        },
    },          
    methods: {   
        getSettings() {
            this.loading = true;
            axios.get('/api/V1/settings')
            .then(response => {
                let setting = response.data.data[0];
                  
                this.dateFrom = JSON.parse(setting.date_from);
                this.dateTo = JSON.parse(setting.date_to);
                this.customer = setting.customer;       
                this.address = setting.address; 
                this.dispetcher = JSON.parse(setting.dispetcher);       
                this.mechanic = JSON.parse(setting.mechanic);  
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false             
            })
        },        
        saveWaybillToJournal() {
            axios.post('/api/V1/waybills', {
                number: this.waybillNumber,

                date_from: JSON.stringify(this.dateFrom),
                date_to: JSON.stringify(this.dateTo),

                full_name: this.driver.last_name + ' ' + this.driver.first_name + ' ' + this.driver.middle_name ,
                person_number: this.driver.person_number,
                car_number: this.car.number
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
        goBack() {
            this.$router.go(-1);
        },
        addZero(day, number) {
            console.log(day)
            if (Number(day) < number) {
               return `0${day}`;
            } else {
                return day;
            }
        },
        formatDate(dateFrom, dateTo) {
            let day = '';
            let month = '';
            let year = '';
            if (dateTo.day !== dateFrom.day) {
                day = `${this.addZero(dateFrom.day, 10)}-${this.addZero(dateTo.day, 10)}`;
            } else day = this.addZero(dateFrom.day, 10);

            if (dateTo.month !== dateFrom.month) {
                month = this.monthList[dateFrom.month - 1] + '-' + this.monthList[dateTo.month - 1];
            } else month = this.monthList[dateFrom.month - 1];

            if (dateTo.year !== dateFrom.year) {
                year = dateFrom.year + '-' + dateTo.year;
            } else year = dateFrom.year;

            return { day, month, year }
        },
        togglePrintDocument() {
            this.isPrintOpen = !this.isPrintOpen;
        },
        togglePrintBack() {
            this.isPrintBackOpen = !this.isPrintBackOpen;
        },
        printDocument() {
            this.saveWaybillToJournal();            
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
        getJournal() {
            this.loading = true;
            axios.get('/api/V1/waybills')
            .then(response => {
                this.waybills = response.data.data;
                if (response.data.data[0]) {
                    this.waybillNumber = Number(response.data.data[0].number) + 1
                } else {
                    this.waybillNumber = 1;
                }
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false             
            })
        },        
    },    
    async mounted() {
       this.getOneRelation();
       this.getJournal();  
       this.getSettings();  
    }
}
</script>

<style lang="scss" scoped>

$bg-color: rgb(214, 214, 214);
$content-color: rgb(0, 76, 143);

.relation-page {
    padding: 96px 32px 0 272px;  
    margin: 0 auto;  
    display: flex;
    &__journal {
        padding: 0 0 0 32px;
        flex: 0 0 380px;   
    }
    &__journal-title {
        margin-bottom: 16px;             
    }
}

.relation {
    flex-grow: 1;
    &__title {
        margin-bottom: 16px;
    }
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
        width: 60px;
        padding: 0 8px;
        margin-right: 8px;
        font-size: 15px;
        text-align: center;
        border-radius: 4px; 
        border: none; 
        color: $content-color;      
    }
    a {
        color: green;
    }
    &__item {
        position: relative;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
    }
    &__date {
        color: rgb(198, 0, 0);
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
    z-index: 3;
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