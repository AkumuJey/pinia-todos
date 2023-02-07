<template>
 <main>
    <header>
        <img src="./assets/pinia.svg" alt="Pinia Logo" srcset="">
        <h1>Akumu's Todos</h1>
    </header>
    <nav class="filter">
        <button @click="filter = 'all'">All todos</button>
        <button @click="filter = 'favs'">Favorite todos</button>
    </nav>
    <div>
        <div v-if="filter === 'all'">
            <h2>You have {{ todosStore.totalCount }} <span v-if="todosStore.totalCount > 1">todos</span><span v-else>todo</span> pending</h2>
            <div v-for="todo in todosStore.todos" :key="todo.id">
            <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
        <div v-if="filter === 'favs'">
            <h2> You have {{ todosStore.favCount }} favorite <span v-if="todosStore.favs > 1">todos</span><span v-else>todo</span></h2>
            <div v-for="todo in todosStore.favs" :key="todo.id">
            <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
    </div>
 </main>
</template>
<script setup>

import { ref } from '@vue/reactivity';
import TheTodoDetails from './components/TheTodosDetails.vue'
import { useTodosStore } from './store/todoStore';
const todosStore = useTodosStore()


/* Filter for favorites */
const filter = ref('all')

</script>


