<template>
    <div class="page home-page">
        <h1 class="home-page__title">Печать путевых листов</h1> 
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
    padding-top: 86px;
    &__title {
        text-align: center;
        margin-bottom: 96px;
    }
}
.home-page__image-block {
    width: 100%;
    margin: 0 auto;
    img {
        width: 100%;
    }
}
</style>