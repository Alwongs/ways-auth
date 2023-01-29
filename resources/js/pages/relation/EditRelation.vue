<template>
    <div class="page">
        <h1 class="page__title">Редактирование отношения "Автомобиль-Водитель"</h1>

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="edit-form">
            <div class="edit-form__item">
                <input type="text" v-model="code" :class="{'input-invalid':  v$.code.$errors.length}" placeholder="Код отношения">
                <div class="validation-message" v-for="error of v$.code.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>  

            <div class="edit-form__item">
                <input  
                    v-model="carNumber" 
                    type="text" 
                    placeholder="Выберете автомобиль"
                    :class="{'input-invalid':  v$.carNumber.$errors.length}"
                    @click="toggleCarList"
                >
                <ul v-if="isCarListOpen" class="select-car">
                    <li 
                        v-for="car in cars" 
                        :key="car.id" 
                        class="select-car__item"
                        @click="selectCar(car)"
                    >
                        {{ car.number }}
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

        <button 
            class="app-btn app-btn__save" 
            @click.prevent="updateRelation"
        >
            Обновить
        </button>
    </div>
</template>

<script>
import { required, minLength, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
    name: 'EditRelation',
    props: [
        'relationId'
    ],
    setup () {
        return { v$: useVuelidate() }
    },    
    data() {
        return {
            isCarListOpen: false,
            isDriverListOpen: false,

            carNumber: '',          
            driverName: '',

            code: '',
            car: {},
            driver: {},
            
            cars: [],
            drivers: [],

            errored: false,
            loading: true
        }
    },
    validations () {
        return {
            code: { required, minLength: minLength(4), maxLength: maxLength(10) },
            carNumber: { required },
            driverName: { required },
        }
    },
    methods: {
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
        updateRelation() {
            this.v$.$touch()
            if(this.v$.$error) {
                console.log(this.v$);
                return;
            }            
            axios.post('/api/V1/relations/' + this.relationId, {
                _method: 'PUT',
                code: this.code,
                car_id: this.car.id,
                number: this.car.number,
                driver_id: this.driver.id,
                last_name: this.driver.last_name,
            })
            .then(response => {
                this.$router.push({name: 'relation', params: {relationId: this.relationId}});
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => {
                this.loading = false;           
            })            
        },
        getAllCars() {
            axios.get('/api/V1/cars')
            .then(response => {
                this.cars = response.data.data   
                console.log(this.cars)        
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
        getRelation(id) {
            axios.get('/api/V1/relations/' + id)
            .then(response => {
                this.code = response.data.data.code;
                this.carId = response.data.data.car_id;
                this.carNumber = response.data.data.number;
                this.driverId = response.data.data.driver_id;
                this.driverName = response.data.data.last_name;
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => {
                this.loading = false ;          
            }) 
        }     
    },
    mounted() {
        this.getRelation(this.relationId);
        this.getAllCars();
        this.getAllDrivers();        
    }
}
</script>


<style lang="scss" scoped>

.select-car {
    position: absolute;
    width: fit-content;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    border-radius: 0 0 5px 5px;
    padding: 8px 0;
}
.select-car__item {
    padding: 6px 32px;
    margin-bottom: 8px;
    &:hover {
        background-color: rgb(226, 247, 253);
        cursor: pointer;
    }
}
</style>