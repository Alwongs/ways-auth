<template>
    <div class="page">
        <h1 class="page__title">Вход</h1>

        <div class="form">
            <div class="form__item">
                <input v-model="email" type="email" placeholder="name">
            </div>
            <div class="form__item">
                <input v-model="password" type="password" placeholder="password">
            </div>
            <div class="app-btn-group">
                <button @click.prevent="login" type="submit" value="login" class="app-btn app-btn__save">Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: 'alwong@ya.ru',
            password: '12345678'
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', { email: this.email, password: this.password})
                        .then( r => {
                            localStorage.setItem('x_xsrf_token', r.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name: 'home'})
                        }).catch(err => {
                            console.log(err.response);
                        })
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>