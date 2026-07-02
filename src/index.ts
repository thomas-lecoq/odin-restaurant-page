import "./styles/main.css";
import { createHeader, createFooter } from "./components"; // search for index.ts file in ./components
import { pages } from "./pages";

// main function - assemble pages
function init(): void {
    function navigate(tabId: string): void {
        // identify page content to generate from its tabId
        const page = pages.find((p) => p.id === tabId);
        if (!page) return;

        // set `main` DOM element and replace its content depending on tabId
        const mainClass = "site-main"
        let main = document.querySelector(`.${mainClass}`);
        if (!main) {
            main = document.createElement("div");
            main.className = mainClass;
            header.after(main);
        }
        main.replaceChildren(page.render());

        // set active class on clicked button, unset active class on others
        header
            .querySelectorAll<HTMLButtonElement>(".site-header__tab")
            .forEach((b) => b.classList.toggle("active", b.dataset.tabId === tabId))
    }

    // init app home page content
    const header = createHeader(navigate); // page react on tab click
    const footer = createFooter();
    document.body.append(header, footer);
    navigate("home"); // force navigation to "home" on init
}

init();
