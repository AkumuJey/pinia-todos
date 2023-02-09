<template>
 <main>
    <header>
        <img src="./assets/pinia.svg" alt="Pinia Logo" srcset="">
        <h1>Akumu's Todos</h1>
    </header>
    <div class="new-todo-form">
        <TheTodosForm />
    </div>
    <nav class="filter">
        <button @click="filter = 'all'">All todos</button>
        <button @click="filter = 'favs'">Favorite todos</button>
    </nav>
    <div class="isLoading" v-if="isLoading">
        <h1>Loading Todos</h1>
    </div>
    <div v-else>
        <div v-if="filter === 'all'">
            <h2>You have {{ totalCount }} <span v-if="totalCount === 1">todo</span><span v-else>todos</span> pending</h2>
            <div v-for="todo in todos" :key="todo.id">
            <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
        <div v-if="filter === 'favs'">
            <h2> You have {{ favCount }} favorite <span v-if="favCount === 1">todo</span><span v-else>todos</span></h2>
            <div v-for="todo in favs" :key="todo.id">
            <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
    </div>
    <button @click="todosStore.$reset">Reset</button>
 </main>
</template>
<script setup>
/*Components*/
import TheTodoDetails from './components/TheTodosDetails.vue'
import TheTodosForm from './components/TheTodosForm.vue'

import { ref } from '@vue/reactivity';
import { useTodosStore } from './store/todoStore';
import { storeToRefs } from 'pinia';

const todosStore = useTodosStore()

const { todos, isLoading, favs, favCount, totalCount } = storeToRefs(todosStore)

todosStore.getTodos()


/* Filter for favorites */
const filter = ref('all')

</script>


