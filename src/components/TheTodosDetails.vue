<template>
<div class="todo">
    <h3>{{ todo.title }}</h3>
    <div class="icons">
        <i class="material-icons">favorite</i>
        <i class="material-icons">delete</i>
    </div>
</div>
</template>

<script setup>

const { todo } = defineProps(['todo'])

</script>

<style>

</style>