<template>
    <div class="page">
        <h1 class="page__title">Водитель - Автомобиль</h1>

        <button class="small-btn small-btn__add mb-16" @click="addRelation">+</button>  

        <app-loader v-if="loading" />
        <error-notification v-if="errored" />

        <ul class="relation-list">
            <li 
                v-for="relation in relations" 
                :key="relation.id" 
                class="relation-list__item"
            >
                <router-link :to="{ name: 'relation', params: {relationId: relation.id} }">
                    <h3>{{ relation.last_name }} <span class="relation-list__number">{{ relation.number }}</span></h3>
                </router-link>  

                <div class="relation-list__devider" @click="$router.push({ name: 'relation', params: {relationId: relation.id} })"></div>

                <div class="small-btn-group">
                    <button 
                        class="small-btn small-btn__del" 
                        @click="deleteRelation(relation.id)"
                    >
                        Del
                    </button>
                </div>                               
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            relations: [],

            errored: false,
            loading: true
        }
    },
    mounted() {
        this.getAllRelations();
    },
    methods: {    
        printDocument(id) {
            this.$router.push({ name: 'print-document', params: {relationId: id} })
        },
        getAllRelations() {
            axios.get('/api/V1/relations')
            .then(response => {
                this.relations = response.data.data          
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false             
            })
        },
        addRelation() {
            this.$router.push({ name: 'add-relation' })
        },
        editRelation(id) {
            this.$router.push({ name: 'edit-relation', params: {relationId: id} })
        },
        deleteRelation(id) {
            if (confirm('Вы действительно хотите удалить отношение?')) {
                axios.post('/api/V1/relations/' + id, {
                    _method: 'DELETE'
                })
                .then(response => {
                    this.relations = [];
                    this.getAllRelations();
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => {
                    this.loading = false           
                })
            }
        }         
    }
}
</script>


<style lang="scss" scoped>

.relation-list {
    &__item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding: 6px;
        &:hover {
            background-color: rgb(208, 234, 246);
        } 
    }
    &__devider {
        border-bottom: 1px dotted black;
        flex-grow: 1;
        margin: 0 16px;
        height: 32px;
        cursor: pointer;
    }
    &__number {
        text-transform: lowercase;
        border: 1.5px solid black;
        border-radius: 4px;
        background-color: #fff;
        margin-left: 8px;
        padding: 0 4px;
        color: black;
    }
}
</style>
