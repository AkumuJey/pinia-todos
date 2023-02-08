<template>
<div class="todo">
    <h3>{{ todo.title }}</h3>
    <div class="icons">
        <i 
          class="material-icons"
          :class="{active: todo.isFav}"
          @click="todosStore.toggleFav(todo.id)"
          >favorite</i>
        <i 
          class="material-icons"
          @click="todosStore.deleteTodo(todo.id)"
          >delete</i>
    </div>
</div>
</template>

<script setup>
import { useTodosStore } from "../store/todoStore"


const { todo } = defineProps(['todo'])
const todosStore = useTodosStore()



</script>

<style>

</style>