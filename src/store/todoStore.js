import { defineStore } from "pinia";

export const useTodosStore = defineStore('todosStore', {
    state: () => (
        {
            todos : [
                {id: 1, title: "read for my exams", isFav: false},
                {id: 2, title: "see my girl", isFave: true},
                {id: 3, title: "watch manchester united win", isFav: true}
            ]
        }
    ),
    getters: {
        favs() {
            return this.todos.filter(todo => todo.isFav)
        },
        favCount() {
            return this.todos.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.todos.length
        }
    }
})