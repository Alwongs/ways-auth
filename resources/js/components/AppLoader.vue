<template>
    <div class="bg-loader">
        <div class="loading">
            Загрузка данных...
        </div>
    </div>
</template>

<script>

export default {
    name: 'AppLoader'
}
</script>

<style lang="scss" scoped>

.bg-loader {
    z-index: 2;    
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    .loading {
        background-color: #fff;
        z-index: 3;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: black;
        border-radius: 10px;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
    }
}
</style>