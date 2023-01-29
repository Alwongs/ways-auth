import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/user/login',
            name: 'user.login', 
            component: () => import('./pages/Login'),
        },
        {
            path: '/user/register',
            name: 'user.register', 
            component: () => import('./pages/Register'),
        },
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/Home.vue')
        },        

// ----------- cars -------------------
        {
            path: '/cars',
            name: 'cars',
            component: () => import('./pages/car/CarList.vue'),
        },
        {
            path: '/cars/:carId',
            name: 'car',
            component: () => import('./pages/car/CarItem.vue'),
            props: true
        },
        {
            path: '/add-car',
            name: 'add-car',
            component: () => import('./pages/car/CarAdd.vue'),
        },
        {
            path: '/edit-car/:carId',
            name: 'edit-car',
            component: () => import('./pages/car/CarEdit.vue'),
            props: true
        },	
        
        // ---------- drivers ----------------
        {
            path: '/drivers',
            name: 'drivers',
            component: () => import('./pages/driver/DriverList.vue'),
        },
        {
            path: '/drivers/:driverId',
            name: 'driver',
            component: () => import('./pages/driver/DriverItem.vue'),
            props: true
        },
        {
            path: '/add-driver',
            name: 'add-driver',
            component: () => import('./pages/driver/DriverAdd.vue'),
        },
        {
            path: '/edit-driver/:driverId',
            name: 'edit-driver',
            component: () => import('./pages/driver/DriverEdit.vue'),
            props: true
        },        

        // ------------ relations ------------------   
        {
            path: '/relations',
            name: 'relations',
            component: () => import('./pages/relation/RelationList.vue'),
        },   
        {
            path: '/relations/:relationId',
            name: 'relation',
            component: () => import('./pages/relation/OneRelation.vue'),
            props: true
        },  
        {
            path: '/add-relation',
            name: 'add-relation',
            component: () => import('./pages/relation/AddRelation.vue'),
        }        
    ]
})



router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.register' && token) {
        return next({
            name: 'home'
        })
    }

    next()
})

export default router