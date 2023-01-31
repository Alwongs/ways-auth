<template>
    <div class="wrapper">
        <nav class="nav">
            <router-link class="nav__logo" :to="({name: 'home'})">На главную</router-link>
            <div class="nav__list">
                <router-link class="nav__item" v-if="token" :to="{ name: 'cars' }">Автомобили</router-link>
                <router-link class="nav__item" v-if="token" :to="{ name: 'drivers' }">Водители</router-link>
                <router-link class="nav__item" v-if="token" :to="{ name: 'relations' }">Авто-Водитель</router-link>
                
                <router-link class="nav__item" v-if="!token" :to="{ name: 'user.login' }">Вход</router-link>
                <router-link class="nav__item" v-if="!token" :to="{ name: 'user.register' }">Регистрация</router-link>
                <a class="nav__item" v-if="token" @click.prevent="logout" href="#">Выход</a>                
            </div>
        </nav>         

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            token: null
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

.nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: $nav-panel-color;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 18px;
    padding: 0 32px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
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
.nav__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav__item {
    &:hover {
        color: rgb(255, 196, 0);
        transition: 0.3s;
    }
}
.nav__item:not(:last-child) {
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
.nav__item-logout {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
}
</style>