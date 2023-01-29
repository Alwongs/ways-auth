<template>
    <div class="page home-page">
        <h1 class="page__title">Транспорт</h1> 
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

.home-page__image-block {
    padding-top: 48px;
    img {
        width: 100%;
    }
}
</style>