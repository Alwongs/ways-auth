<template>
    <div class="page">
        <h1 class="page__title">Редактирование автомобиля</h1>

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="edit-form">
            <div class="edit-form__item">
                <input type="text" v-model="carType" :class="{'input-invalid':  v$.carType.$errors.length}" placeholder="тип: Легковой, Грузовой, Погрузчик ...">
                <div class="validation-message" v-for="error of v$.carType.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>           
            <div class="edit-form__item">
                <input type="text" v-model="carFuel" :class="{'input-invalid':  v$.carFuel.$errors.length}" placeholder="Тип топлива">
                <div class="validation-message" v-for="error of v$.carFuel.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div> 
            <div class="edit-form__item">
                <input type="text" v-model="carModel" :class="{'input-invalid':  v$.carModel.$errors.length}" placeholder="Модель автомобиля">
                <div class="validation-message" v-for="error of v$.carModel.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>                     
            <div class="edit-form__item">
                <input type="text" v-model="carNumber" :class="{'input-invalid':  v$.carNumber.$errors.length}" placeholder="Гос. номер">
                <div class="validation-message" v-for="error of v$.carNumber.$errors" :key="error.$uid">
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
                @click.prevent="updateCar"
            >
                Сохранить
            </button>
        </div>
    </div>
</template>

<script>
import { required, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
    name: 'CarEdit',
    props: [
        'carId'
    ],
    setup () {
        return { v$: useVuelidate() }
    },    
    data() {
        return {
            errored: false,
            loading: true,

            carType: '',
            carFuel: '',            
            carModel: '',
            carNumber: '',
        }
    },
    validations () {
        return {
            carType: { required, maxLength: maxLength(255) },
            carFuel: { required, maxLength: maxLength(255) },
            carModel: { required, maxLength: maxLength(255) },
            carNumber: { required, maxLength: maxLength(255) }
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }, 
        updateCar() {
            this.v$.$touch()
            if(this.v$.$error) {
                console.log(this.v$)
                return;
            }            
            axios.post('/api/V1/cars/' + this.carId, {
                _method: 'PUT',
                type: this.carType,
                fuel: this.carFuel,
                model: this.carModel,
                number: this.carNumber
            })
            .then(response => {
                this.$router.push({name: 'car', params: {carId: this.carId}})
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })            
        },
        getOneCar() {
            axios.get('/api/V1/cars/' + this.carId)
            .then(response => {
                this.carType = response.data.data.type;
                this.carFuel = response.data.data.fuel;
                this.carModel = response.data.data.model;
                this.carNumber = response.data.data.number;
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })  
        }
    },
    mounted() {
        this.getOneCar();
    }
}
</script>
