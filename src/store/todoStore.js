import { defineStore } from "pinia";

export const useTodosStore = defineStore('todosStore', {
    state: () => (
        {
            todos : [],
            isLoading: false
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
    },
    actions: {
        async getTodos() {
            this.isLoading = true
            const res = await fetch('http://localhost:3000/todos')
            const data = await res.json()
            this.todos = data
            this.isLoading = false
        },
        addTodo(todo) {
            this.todos.push(todo)
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => {
              return todo.id !== id
            })
          },
        toggleFav(id) {
            const todo = this.todos.find(t => t.id === id)
            todo.isFav = !todo.isFav
        }
    }
})