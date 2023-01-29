<template>
    <div class="page">
        <h1 class="page__title">Добавление соотношение</h1>

        <error-notification v-if="errored" />

        <div class="edit-form">
            <div class="edit-form__item">
                <input  
                    v-model="carNumber" 
                    type="text" 
                    placeholder="Выберете автомобиль"
                    :class="{'input-invalid':  v$.carNumber.$errors.length}"
                    @click="toggleCarList"
                >
                <ul v-if="isCarListOpen" class="select-car">
                    <li class="closeBtn" @click="toggleCarList">x</li>                    
                    <li 
                        v-for="car in cars" 
                        :key="car.id" 
                        class="select-car__item"
                        @click="selectCar(car)"
                    >
                        {{ car.model}} <span class="select-car__item-number">{{ car.number }}</span>
                    </li>
                </ul>
                <div 
                    v-for="error of v$.carNumber.$errors" 
                    :key="error.$uid"
                    class="validation-message" 
                >
                    {{ error.$message }}
                </div>
            </div>

            <div class="edit-form__item">
                <input 
                    v-model="driverName"
                    type="text"  
                    placeholder="выберете водителя"
                    :class="{'input-invalid': v$.driverName.$errors.length}" 
                    @click="toggleDriverList"
                >
                <ul 
                    v-if="isDriverListOpen" 
                    class="select-car"
                >
                    <li class="closeBtn" @click="toggleDriverList">x</li>                
                    <li 
                        v-for="driver in drivers" 
                        :key="driver.id" 
                        class="select-car__item"
                        @click="selectDriver(driver)"
                    >
                        {{ driver.last_name }} 
                        {{ driver.first_name }} 
                        {{ driver.middle_name }}
                    </li>
                </ul>                
                <div
                    v-for="error of v$.driverName.$errors" 
                    :key="error.$uid"
                    class="validation-message"
                >
                    {{ error.$message }}
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
                class="app-btn app-btn__save" 
                @click.prevent="saveRelation"
            >
                Сохранить
            </button>
        </div>
    </div>
</template>

<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
    name: 'AddRelation',
    setup () {
        return { v$: useVuelidate() }
    },    
    data() {
        return {
            errored: false,
            loading: true,

            isCarListOpen: false,
            isDriverListOpen: false,

            carNumber: '',
            driverName: '',

            car: {},
            driver: {},
            
            cars: [],
            drivers: []
        }
    },
    validations () {
        return {
            carNumber: { required },
            driverName: { required } 
        }
    },
    mounted() {
        this.getAllCars();
        this.getAllDrivers();
    },    
    methods: {       
        goBack() {
            this.$router.go(-1);
        },
        selectCar(car) {
            this.car = car;
            this.carNumber = car.number;
            this.isCarListOpen = false;           
        },
        selectDriver(driver) {
            this.driver = driver;
            this.driverName = driver.last_name;
            this.isDriverListOpen = false;  
        },
        toggleCarList() {
            this.isCarListOpen = !this.isCarListOpen
        },
        toggleDriverList() {
            this.isDriverListOpen = !this.isDriverListOpen
        },
        saveRelation() {
            this.v$.$touch()
            if(this.v$.$error) {
                return;
            }
            axios.post('/api/V1/relations', {
                code: this.car.id + '_' + this.driver.id,
                car_id: this.car.id,
                number: this.car.number,
                driver_id: this.driver.id,
                last_name: this.driver.last_name,
            })
            .then(response => {
                this.$router.push({name: 'relations'})
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })            
        },
        getAllCars() {
            axios.get('/api/V1/cars')
            .then(response => {
                this.cars = response.data.data           
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false             
            })
        },    
        getAllDrivers() {
            axios.get('/api/V1/drivers')
            .then(response => {
                this.drivers = response.data.data
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

input {
    cursor: default;
    outline: none;
}
.select-car {
    position: absolute;
    width: fit-content;
    background-color: #fff;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 2px 0;
}
.select-car__item {
    font-weight: 700;
    border-top: 1px solid lightgrey;
    padding: 4px 32px;
    margin-bottom: 4px;
    color: rgb(0, 75, 119);
    &:hover {
        background-color: rgb(226, 247, 253);
        cursor: pointer;
    }
}
.select-car__item-number {
    text-transform: lowercase;
    border: 1.5px solid black;
    border-radius: 4px;
    background-color: #fff;
    margin-left: 8px;
    padding: 0 4px;
    color: black;        
}
.closeBtn {
    text-align: end;
    padding-right: 8px;
    cursor: pointer;
}
</style>