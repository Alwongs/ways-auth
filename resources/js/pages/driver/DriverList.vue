<template>
    <div class="page">
        <h1 class="page__title">Водители</h1>

        <button class="small-btn small-btn__add mb-16" @click="addDriver">+</button>

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />
        
        <ul class="driver-list">
            <li 
                v-for="(driver, index) in drivers" 
                :key="driver.id" 
                class="driver-list__item"
            >
                <router-link :to="{ name: 'driver', params: {driverId: driver.id} }">
                    <h3>{{ index + 1 }}. {{ driver.last_name }} {{ driver.first_name }} {{ driver.middle_name }}</h3>
                </router-link>

                <div class="driver-list__devider"></div>                

                <div class="small-btn-group">
                    <button 
                        class="small-btn small-btn__edit" 
                        @click="editDriver(driver.id)"
                    >
                        Edit
                    </button>
                    <button 
                        class="small-btn small-btn__del" 
                        @click="deleteDriver(driver.id)"
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
    name: 'DriverList',
    data() {
        return {
            drivers: [],
            errored: false,
            loading: true
        }
    },
    mounted() {
        this.getAllDrivers();
    },
    methods: {
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
        addDriver() {
            this.$router.push({ name: 'add-driver' })
        },
        editDriver(id) {
            this.$router.push({ name: 'edit-driver', params: {driverId: id} })
        },
        deleteDriver(id) {
            if (confirm('Вы действительно хотите удалить водителя?')) {
                axios.post('/api/V1/drivers/' + id, {
                    _method: 'DELETE'
                })
                .then(response => {
                    this.drivers = [];
                    this.getAllDrivers();
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

.driver-list {
    &__item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
}
</style>