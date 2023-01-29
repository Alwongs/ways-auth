<template>
    <div class="page driver">

        <div class="driver-name">
            {{ driver.last_name }} {{ driver.first_name }} {{ driver.middle_name }}                
        </div>        

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <div class="driver-content">
            <div class="driver-content__item driver-content__is-mechanic" v-if="driver.is_mechanic">Механик</div>
            <div class="driver-content__item driver-content__item-details"><b>Водительское удостоверение:</b> {{ driver.driver_license }}</div>
            <div class="driver-content__item driver-content__item-details"><b>Tабельный номер:</b> {{ driver.person_number }}</div>
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
                @click.prevent="editDriver"
            >
                Edit
            </button>              
        </div>
    </div>
</template>

<script>
export default {
    name: 'DriverItem',
    props: [
        'driverId'
    ],
    data() {
        return {
            driver: {},
            errored: false,
            loading: true
        }
    },
    methods: {       
        goBack() {
            this.$router.go(-1);
        },
        editDriver() {
            this.$router.push({ name: 'edit-driver', params: {driverId: this.driverId} })
        },
        getOneDriver() {
            axios.get('/api/V1/drivers/' + this.driverId)
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
        }
    },
    mounted() {
       this.getOneDriver();
    }
}
</script>

<style lang="scss" scoped>

$content-color: rgb(0, 76, 143);
.driver-name {
    font-weight: 700;
    font-size: 22px; 
    text-align: center;
    color: $content-color;
    margin-bottom: 16px;         
}

.driver-content {
    margin-bottom: 16px;
    &__item-details {
        font-size: 14px;
    }
    &__is-mechanic {
        font-weight: 700;
        color: red;
        margin-bottom: 16px;
    }
}
</style>