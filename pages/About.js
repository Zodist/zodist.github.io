import { loadAbout } from "../js/about.js";
export default class {
    constructor() {
        document.title = "About";
    }
    async getHtml() {
        return `
        <div class="viewport">
            <div class="scene3D-container">
                <div class="scene3D">
                    <div class="yearBar"></div>
                </div>
            </div>
        </div>
        `;
    }
    async loadFunc() {
        loadAbout();
    }
}