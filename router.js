import Home from "./pages/Home.js"
import About from "./pages/About.js";
import Posts from "./pages/Posts.js"
import Settings from "./pages/Settings.js";
import Momentum from "./pages/Momentum.js";

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/about", view: About },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
        { path: "/momentum", view: Momentum },
    ];

    const pageMatches = routes.map(route => {
        return {
            route,
            isMatch: route.path === location.pathname,
        }
    });

    const match = pageMatches.find(pageMatch => pageMatch.isMatch);
    const page = new match.route.view();

    document.querySelector("main").innerHTML = await page.getHtml();
    await page.loadFunc();
}

export default router;