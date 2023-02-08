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
    <div class="isLoading" v-if="todosStore.isLoading">
        <h1>Loading Todos</h1>
    </div>
    <div v-else>
        <div v-if="filter === 'all'">
            <h2>You have {{ todosStore.totalCount }} <span v-if="todosStore.totalCount === 1">todo</span><span v-else>todos</span> pending</h2>
            <div v-for="todo in todosStore.todos" :key="todo.id">
            <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
        <div v-if="filter === 'favs'">
            <h2> You have {{ todosStore.favCount }} favorite <span v-if="todosStore.favCount === 1">todo</span><span v-else>todos</span></h2>
            <div v-for="todo in todosStore.favs" :key="todo.id">
            <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
    </div>
 </main>
</template>
<script setup>
/*Components*/
import TheTodoDetails from './components/TheTodosDetails.vue'
import TheTodosForm from './components/TheTodosForm.vue'

import { ref } from '@vue/reactivity';
import { useTodosStore } from './store/todoStore';
const todosStore = useTodosStore()

todosStore.getTodos()


/* Filter for favorites */
const filter = ref('all')

</script>


