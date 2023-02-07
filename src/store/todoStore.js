import { defineStore } from "pinia";

export const useTodosStore = defineStore('todosStore', {
    state: () => (
        {
            todos : [
                {id: 1, title: "read for my exams", isFave: false},
                {id: 2, title: "see my girl", isFave: true},
                {id: 3, title: "watch manchester united win", isFave: true}
            ],
            name : 'Todos'
        }
    )
})