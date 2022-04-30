export default class {
    constructor() {
        document.title = "Posts";
    }
    async getHtml() {
        return `
            <h1>This is Posts Page (Test)</h1>
            <div class="post">
                <div class="postPage">Scroll</div>
                <div class="postPage">Snap</div>
                <div class="postPage">Test</div>
            </div>
        `;
    }
}