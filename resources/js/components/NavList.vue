<template>
    <nav class="nav">
        <ul>
            <li 
                v-if="token"
                @click="$router.push({name: 'cars'})"
            >
                <router-link
                    :to="{name: 'cars'}"
                    class="nav__item icon-cars" 
                >
                    Автомобили
                </router-link>
            </li>

            <li
                v-if="token" 
                @click="$router.push({name: 'drivers'})"
            >
                <router-link  
                    :to="{name: 'drivers'}"
                    class="nav__item icon-drivers" 
                >
                    Водители
                </router-link>
            </li>

            <li
                v-if="token"
                @click="$router.push({name: 'relations'})"
            >
                <router-link 
                    :to="{name: 'relations'}"
                    class="nav__item icon-waybills" 
                >
                    Путевые листы
                </router-link>
            </li>

            <li
                v-if="token"
                @click="$router.push({name: 'journal'})"
            >
                <router-link  
                    :to="{name: 'journal'}"
                    class="nav__item icon-journal" 
                >
                    Журнал
                </router-link>
            </li>

            <li
                v-if="token"
                @click="$router.push({name: 'settings'})"
            >
                <router-link  
                    :to="{name: 'settings'}"
                    class="nav__item icon-settings"
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
        padding-left: 54px;
        border-bottom: 0.5px dotted rgb(97, 113, 134);
        cursor: pointer;
        &:hover {
            background-color: $nav-panel-color;
            color: rgb(255, 230, 0);
            transition: 0.2s;
        }          
    }
    &__item {
        position: relative;        
        margin-bottom: 16px;
        &::before {
            content: '';
            position: absolute;
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
        }        
    }
}
.icon-cars {
    &::before {
        background-image: url("../../assets/svg/cars.svg");
        background-size: 65%;
        left: -28px;
        top: 4px;
    }
}
.icon-drivers {
    &::before {
        background-image: url("../../assets/svg/drivers.svg");
        background-size: 70%;        
        left: -26px;
        top: 6px;
        width: 20px;
        height: 20px;        
    }
}
.icon-waybills {
    &::before {
        background-image: url("../../assets/svg/waybills.svg");
        background-size: 45%;
        left: -25px;
        top: 7px;
    }
}
.icon-journal {
    &::before {
        background-image: url("../../assets/svg/journal.svg");
        background-size: 40%;
        left: -24px;
        top: 6px;
    }
}
.icon-settings {
    &::before {
        background-image: url("../../assets/svg/settings.svg");
        background-size: 50%;
        left: -25px;
        top: 6px;
    }
}
</style>