<template>
    <div class="home-page">
        <h1 class="home-page__title">Транспорт</h1> 
        <div class="home-page__image-block">
            <img :src="image" alt="image">            
        </div>    
    </div>
</template>

<script>
import image from '../../assets/images/tran.png';

export default {
    name: 'Home',
    data() {
        return {
            image: image
        }
    }
}
</script>

<style lang="scss" scoped>

.home-page {
    flex-grow: 1;
    padding-top: 86px;
    &__title {
        text-align: center;
        margin-bottom: 64px;
    }
}
.home-page__image-block {
    width: 70%;
    margin: 0 auto;
    img {
        width: 100%;
    }
}
</style>