const app = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                text: 'riordinare la camera',
                done: false
            },
            {
                text: 'pulire il pc',
                done: true
            },
            {
                text: 'aggiustare il tetto',
                done: false
            }
        ],
        inputValue: ''
    },
    methods: {
        addTodo: function () {

            if (this.inputValue !== "") {
                const todoObj = {
                    text: this.inputValue,
                    done: false
                };
                this.todos.push(todoObj);
                this.inputValue = "";
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        },
        toggleDone: function (index) {

            this.todos[index].done = !this.todos[index].done;
        }
    }
});