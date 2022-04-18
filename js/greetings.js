export function loadGreetings() {
    const loginForm = document.querySelector("#login-form");
    const loginInput = loginForm.querySelector("input");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    function onLoginSubmit(e) {
        e.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const userName = loginInput.value;
        localStorage.setItem(USERNAME_KEY, userName);
        paintGreetings(userName);
    }

    function paintGreetings(userName) {
        greeting.innerText = `Hello ${userName}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    const savedUserName = localStorage.getItem(USERNAME_KEY);

    if (savedUserName === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(savedUserName);
    }
}