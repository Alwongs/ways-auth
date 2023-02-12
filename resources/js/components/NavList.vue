<template>
    <nav class="nav">
        <ul>
            <li @click="$router.push({name: 'cars'})">
                <router-link 
                    v-if="token" 
                    :to="{name: 'cars'}"
                    class="nav__item" 
                >
                    Автомобили
                </router-link>
            </li>

            <li @click="$router.push({name: 'drivers'})">
                <router-link 
                    v-if="token" 
                    :to="{name: 'drivers'}"
                    class="nav__item" 
                >
                    Водители
                </router-link>
            </li>

            <li @click="$router.push({name: 'relations'})">
                <router-link 
                    v-if="token" 
                    :to="{name: 'relations'}"
                    class="nav__item" 
                >
                    Путевые листы
                </router-link>
            </li>

            <li @click="$router.push({name: 'journal'})">
                <router-link 
                    v-if="token" 
                    :to="{name: 'journal'}"
                    class="nav__item" 
                >
                    Журнал
                </router-link>
            </li>

            <li @click="$router.push({name: 'settings'})">
                <router-link  
                    v-if="token" 
                    :to="{name: 'settings'}"
                    class="nav__item"
                >
                    Настройки
                </router-link>
            </li>         
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'NavList',
    props: ['token'],
}
</script>

<style lang="scss">

@import "../../sass/_variables.scss";

.nav {
    font-size: 20px;
    color: rgb(30, 53, 74);
    li {
        height: 48px;
        line-height: 48px;
        padding-left: 32px;
        border-bottom: 0.5px dotted rgb(97, 113, 134);
        cursor: pointer;
        &:hover {
            background-color: $nav-panel-color;
            color: rgb(255, 230, 0);
            transition: 0.2s;
        }          
    }
    &__item {
        margin-bottom: 16px;
      
    }
}
</style>