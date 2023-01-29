<template>
    <div class="page">
        <h1 class="page__title">Регистрация</h1>
        <div class="form">
            <div class="form__item">
                <input v-model="name" type="text" placeholder="name">
            </div>
            <div class="form__item">
                <input v-model="email" type="email" placeholder="email">
            </div>
            <div class="form__item">
                <input v-model="password" type="password" placeholder="password">
            </div>
            <div class="form__item">
                <input v-model="password_confirmation" type="password" placeholder="password confirmation">
            </div>
            <div class="app-btn-group">
                <button @click.prevent="register" type="submit" value="register" class="app-btn app-btn__save">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie')
            .then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then( res => {
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({name: 'home'})
                })
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>