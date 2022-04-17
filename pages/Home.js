export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
            <h1>This is zodist</h1>
            <h2>I'm hosted with GitHub Pages.</h2>
        `;
    }
}