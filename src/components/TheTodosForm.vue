<template>
  <form @submit.prevent="handleSubmit">
    <input
        type="text"
        placeholder="I plan to..."
        v-model="newTodo">
        <button>Add</button>
  </form>
</template>

<script setup>
import { useTodosStore } from "../store/todoStore";
import { ref } from "vue";


const todosStore = useTodosStore()

const newTodo = ref('')

const handleSubmit = () => {
    if(newTodo.value.length > 0) {
        todosStore.addTodo({
            title: newTodo.value,
            isFav: false,
            id: Math.floor(Math.random() * 1000)
        })
        newTodo.value = ''
    }
}
</script>

<style>

</style>