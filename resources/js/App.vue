<template>
    <div class="wrapper">
        <nav class="app-panel">
            <router-link class="app-panel__logo" :to="({name: 'home'})">На главную</router-link>
            <div class="app-panel__list">
                <router-link class="app-panel__item" v-if="!token" :to="{ name: 'user.login' }">Вход</router-link>
                <router-link class="app-panel__item" v-if="!token" :to="{ name: 'user.register' }">Регистрация</router-link>
                <a class="app-panel__item" v-if="token" @click.prevent="logout" href="#">Выход</a>                
            </div>
        </nav>         

        <div class="main-view">
            <aside class="left-side">
                <div class="left-side__image">
                    <img :src="carImage" alt="image">
                </div>
                <nav-list :token="token"/>
            </aside>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavList from './components/NavList.vue';
import carImage from '../assets/images/car.png';

export default {
    name: 'App',
    components: { NavList },
    data() {
        return {
            token: null,
            carImage: carImage
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    },    
    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },
        logout() {
            if(confirm('Вы уверены, что хотите выйти из системы?')) {
                axios.post('/logout')
                .then( res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'user.login'})
                })
            }
        }
    }
}
</script>

<style lang="scss">

@import "../sass/_variables.scss";

.app-panel {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    background-color: $nav-panel-color;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 18px;
    padding: 0 32px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        font-size: 15px;        
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        font-size: 14px;  
        padding: 0 16px;        
    } 
    @media (max-width: $mobile-max) {
        font-size: 12px;  
        padding: 0 16px;         
    }     
}
.app-panel__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.app-panel__item {
    &:hover {
        color: rgb(255, 196, 0);
        transition: 0.3s;
    }
}
.app-panel__item:not(:last-child) {
    margin-right: 64px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        margin-right: 48px;       
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        margin-right: 32px;        
    } 
    @media (max-width: $mobile-max) {
        margin-right: 8px; 
    }      
}
.app-panel__item-logout {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
}

.main-view {
    height: 100vh;
}
.left-side {
    position: fixed;
    z-index: 2;
    height: 100%;
    padding-top: 96px;
    background-color: rgb(198, 211, 222);
    width: 250px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    &__image {
        width: 200px;
        margin: 0 auto;
        margin-bottom: 16px;
        img {
            width: 100%;
        }
    }
}
</style>