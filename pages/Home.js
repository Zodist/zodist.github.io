export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
        <div class="post">
            <div class="postPage">Welcome</div>
            <div class="postPage">To</div>
            <div class="postPage">Zodist's Blog</div>
        </div>
        `;
    }
    async loadFunc() {
        // const btnTest = document.querySelector("#btnTest");
        // btnTest.addEventListener("click", ()  => {
        //     alert("Test");
        // })
    }
}