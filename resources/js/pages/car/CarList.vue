<template>
    <div class="page">
        <h1 class="page__title">Автомобили</h1>

        <button class="small-btn small-btn__add mb-16" @click="addCar">+</button>        

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <ul class="car-list">
            <li 
                v-for="(car, index) in cars" 
                :key="car.id" 
                class="car-list__item"
            >
                <router-link :to="{ name: 'car', params: {carId: car.id} }">
                    <h3>{{ index + 1 }}. {{ car.model }} <span class="car-list__number">{{ car.number }}</span></h3>
                </router-link>

                <div class="car-list__devider" @click="$router.push({ name: 'car', params: {carId: car.id} })"></div>

                <div class="small-btn-group">
                    <button 
                        class="small-btn small-btn__edit" 
                        @click="editCar(car.id)"
                    >
                        Edit
                    </button>
                    <button 
                        class="small-btn small-btn__del" 
                        @click="deleteCar(car.id)"
                    >
                        Del
                    </button>
                </div>                                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cars: [],
            errored: false,
            loading: true
        }
    },
    mounted() {
        this.getAllCars();
    },
    methods: {
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
        addCar() {
            this.$router.push({ name: 'add-car' })
        },
        editCar(id) {
            this.$router.push({ name: 'edit-car', params: {carId: id} })
        },
        deleteCar(id) {
            if (confirm('Вы действительно хотите удалить автомобиль?')) {
                axios.post('/api/V1/cars/' + id, {
                    _method: 'DELETE'
                })
                .then(response => {
                    this.cars = [];
                    this.getAllCars();
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => {
                    this.loading = false           
                })
            }
        } 
    }
   
}
</script>

<style lang="scss" scoped>

.car-list {
    &__item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding: 6px;
        &:hover {
            background-color: rgb(208, 234, 246);
        } 
    }
    &__devider {
        border-bottom: 1px dotted black;
        flex-grow: 1;
        margin: 0 16px;
        height: 32px;
        cursor: pointer;
    }
    &__number {
        text-transform: lowercase;
        border: 1.5px solid black;
        border-radius: 4px;
        background-color: #fff;
        margin-left: 8px;
        padding: 0 4px;
        color: black;
    }
}
</style>
