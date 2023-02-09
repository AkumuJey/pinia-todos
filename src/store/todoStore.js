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
        async addTodo(todo) {
            this.todos.push(todo)

            const res = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {'Content-Type': 'application/json'}
            })
            if (res.error) {
                console.log(res.error);
            }
        },
        async deleteTodo(id) {
            this.todos = this.todos.filter(todo => {
              return todo.id !== id
            })
            const res = await fetch('http://localhost:3000/todos/' + id, {
                method: 'DELETE'
            })
            if (res.error) {
                console.log(res.error);
            }
          },
        async toggleFav(id) {
            const todo = this.todos.find(t => t.id === id)
            todo.isFav = !todo.isFav
            const res = await fetch('http://localhost:3000/todos/' + id, {
                method: 'PATCH',
                body: JSON.stringify(todo),
                headers: {isFav: todo.isFav }
            })
            if (res.error) {
                console.log(res.error);
            }
        }
    }
})