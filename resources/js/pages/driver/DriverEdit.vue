<template>
    <div class="page">
        <h1 class="page__title">Редактирование водителя</h1>

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="edit-form">
            <div class="edit-form__item">
                <input type="text" v-model="last_name" :class="{'input-invalid':  v$.last_name.$errors.length}" placeholder="Фамилия">
                <div class="validation-message" v-for="error of v$.last_name.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="edit-form__item">
                <input type="text" v-model="first_name" :class="{'input-invalid':  v$.first_name.$errors.length}" placeholder="Имя">
                <div class="validation-message" v-for="error of v$.first_name.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="edit-form__item">
                <input type="text" v-model="middle_name" :class="{'input-invalid':  v$.middle_name.$errors.length}" placeholder="Отчество">
                <div class="validation-message" v-for="error of v$.middle_name.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>                
            </div>   

            <div class="edit-form__item">
                <input type="text" v-model="driver_license" :class="{'input-invalid':  v$.driver_license.$errors.length}" placeholder="Отчество">
                <div class="validation-message" v-for="error of v$.driver_license.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>                
            </div>            
            <div class="edit-form__item">
                <input type="text" v-model="person_number" :class="{'input-invalid':  v$.person_number.$errors.length}" placeholder="Отчество">
                <div class="validation-message" v-for="error of v$.person_number.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>                
            </div>
            <div class="edit-form__item-select">
                <label for="">Механик?</label>
                <a 
                    :class="{'is-mechanic': is_mechanic}"
                    href="#" 
                    @click="selectYes">
                        Да
                    </a>
                <a 
                    :class="{'is-mechanic': !is_mechanic}"                    
                    href="#" 
                    @click="selectNo"
                >
                    Нет
                </a>
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
                @click.prevent="updateDriver"
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
    name: 'DriverEdit',
    props: [
        'driverId'
    ],
    setup () {
        return { v$: useVuelidate() }
    },    
    data() {
        return {
            errored: false,
            loading: true,

            first_name: '',
            middle_name: '',
            last_name: '',

            driver_license: '',           
            person_number: '', 
            
            is_mechanic: false            
        }
    },
    validations () {
        return {
            first_name: { required, maxLength: maxLength(255) },
            middle_name: { required, maxLength: maxLength(255) },
            last_name: { required, maxLength: maxLength(255) },

            driver_license: { required, maxLength: maxLength(255) },
            person_number: { required, maxLength: maxLength(255) },
        }
    },
    methods: {       
        goBack() {
            this.$router.go(-1);
        },
        selectYes() {
            this.is_mechanic = true;
        },
        selectNo() {
            this.is_mechanic = false;
        },        
        updateDriver() {
            this.v$.$touch()
            if(this.v$.$error) {
                console.log(this.v$)
                return;
            }
            axios.post('/api/V1/drivers/' + this.driverId, {
                _method: 'PUT',
                first_name: this.first_name,
                middle_name: this.middle_name,
                last_name: this.last_name,

                driver_license: this.driver_license,
                person_number: this.person_number,

                is_mechanic: this.is_mechanic                
            })
            .then(response => {
                this.$router.push({name: 'driver', params: {dirverId: this.driverId}})
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false           
            })            
        },
        getOneDriver() {
            axios.get('/api/V1/drivers/' + this.driverId)
            .then(response => {
                this.first_name = response.data.data.first_name;
                this.middle_name = response.data.data.middle_name;
                this.last_name = response.data.data.last_name;

                this.driver_license = response.data.data.driver_license;
                this.person_number = response.data.data.person_number;

                this.is_mechanic = response.data.data.is_mechanic;
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
       this.getOneDriver();
    }
}
</script>

<style lang="scss" scoped>

.edit-form__item-select {
    padding-top: 8px;
    label {
        margin-right: 16px;
    }
    a {
        border: 2px solid rgb(243, 243, 243);
        border-radius: 3px;
        padding: 3px; 
        margin-right: 8px;
        color: grey;     
    }
}
.is-mechanic {
    border: 2px solid rgb(12, 69, 130) !important;
    border-radius: 3px;
    padding: 3px;
    color: rgb(0, 45, 92) !important;
    font-weight: 700;
}
</style>