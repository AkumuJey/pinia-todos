<template>
 <main>
    <header>
        <img src="./assets/pinia.svg" alt="Pinia Logo" srcset="">
        <h1>Akumu's {{ todosStore.name }}</h1>
    </header>
    <body>
        <div>
            <div v-for="todo in todosStore.todos" :key="todo.id">
               <TheTodoDetails :todo ="todo"/>
            </div>
        </div>
    </body>
 </main>
</template>
<script setup>

import TheTodoDetails from './components/TheTodosDetails.vue'
import { useTodosStore } from './store/todoStore';
const todosStore = useTodosStore()

</script>


