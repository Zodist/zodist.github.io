export function loadAbout() {

    const perspectiveOrigin = {
        x: parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--scenePerspectiveOriginX"
            )
        ),
        y: parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--scenePerspectiveOriginY"
            )
        ),
        maxGap: 10
    };

    document.addEventListener("DOMContentLoaded", function () {

    });

    function moveCameraAngle(event) {
        const xGap =
            (((event.clientX - window.innerWidth / 2) * 100) /
                (window.innerWidth / 2)) *
            -1;
        const yGap =
            (((event.clientY - window.innerHeight / 2) * 100) /
                (window.innerHeight / 2)) *
            -1;
        const newPerspectiveOriginX =
            perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
        const newPerspectiveOriginY =
            perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

        document.documentElement.style.setProperty(
            "--scenePerspectiveOriginX",
            newPerspectiveOriginX
        );
        document.documentElement.style.setProperty(
            "--scenePerspectiveOriginY",
            newPerspectiveOriginY
        );
    }

    function moveCamera() {
        document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
    }

    function setSceneHeight() {
        const numberOfItems = elems.length; // Or number of items you have in `.scene3D`
        const itemZ = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
        );
        const scenePerspective = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--scenePerspective"
            )
        );
        const cameraSpeed = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
        );

        const height =
            window.innerHeight +
            scenePerspective * cameraSpeed +
            itemZ * cameraSpeed * numberOfItems + 2000;

        // Update --viewportHeight value
        document.documentElement.style.setProperty("--viewportHeight", height);
    }

    function createFilmItem(el) {
        return `<div>
            <p>Year: ${el.year}</p>
            <p>${el.description}</p>
        </div>`;
    }

    function appendFilms(films) {
        const filmsEl = document.querySelector(".viewport .scene3D");
        let filmsNodes = [];
        for (const film of films) {
            filmsNodes.push(createFilmItem(film));
        }

        filmsEl.innerHTML = filmsNodes.join(" ");
    }

    window.addEventListener("scroll", moveCamera);
    window.addEventListener("mousemove", moveCameraAngle);
    const elems = [
        { year: 19920913, description: "Born" },
        { year: 200803, description: "보성고등학교 입학" },
        { year: 201102, description: "보성고등학교 졸업" },
        { year: 201103, description: "숭실대학교 입학" },
        { year: 201802, description: "숭실대학교 졸업" },
        { year: 201807, description: "삼성 SDS 입사" },
    ]
    appendFilms(elems);
    setSceneHeight();
}