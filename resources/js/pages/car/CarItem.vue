<template>
    <div class="page car-page">
        <div class="car-page__title">
            {{ car.model }} - <span class="car-page__title-number">{{ car.number }}</span>
        </div>        

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="car__content">
            <div><b>тип:</b> {{ car.type }}</div>
            <div><b>марка топлива:</b> {{ car.fuel }}</div>
        </div>    
        <div class="app-btn-group">
            <button 
                class="app-btn app-btn__back mr-16" 
                @click.prevent="goBack"
            >
                Назад
            </button>      
            <button 
                class="app-btn app-btn__edit" 
                @click.prevent="editCar"
            >
                Edit
            </button> 
        </div>      
    </div>
</template>

<script>
export default {
    name: 'CarItem',
    props: [
        'carId'
    ],
    data() {
        return {
            car: {},
            errored: false,
            loading: true
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },        
        editCar() {
            this.$router.push({ name: 'edit-car', params: {carId: this.carId} })
        },
        getOneCar() {
            axios.get('/api/V1/cars/' + this.carId)
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
        }
    },    
    mounted() {
        this.getOneCar();
    }
}
</script>

<style lang="scss" scoped>

.car-page {
    &__title {
        font-weight: 700;
        color: rgb(138, 0, 0);
        font-size: 20px;
        margin-bottom: 24px;
    }
    &__title-number {
        text-transform: lowercase;
        border: 1.5px solid black;
        border-radius: 4px;
        background-color: #fff;
        padding: 0 4px;
        color: black;
    }
}
</style>