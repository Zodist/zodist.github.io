import { loadClock } from "../js/clock.js";
import { loadGreetings } from "../js/greetings.js"
import { loadTodo } from "../js/todo.js"
export default class {
    constructor() {
        document.title = "Momentum";
    }
    async getHtml() {
        return `
        <div id="momentum">
            <form id="login-form" class="hidden">
                <input required type="text" placeholder="what is your name?" />
                <button>Log In</button>
            </form>
            <h2 id="clock">00:00:00</h2>
            <h1 id="greeting" class="hidden"></h1>

            <form id="todo-form">
                <input type="text" placeholder="Write a Todo and Press Enter" required />
            </form>
            <ul id="todo-list"></ul>
            <div id="quote">
                <span></span>
                <br>
                <span></span>
            </div>
            <div id="weather">
                <span></span>
                <br>
                <span></span>
            </div>
        </div>
        `;
    }
    async loadFunc() {
        loadClock();
        loadGreetings();
        loadTodo();
    }
}