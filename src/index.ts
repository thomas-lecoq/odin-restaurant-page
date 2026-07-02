import "./styles/main.css";
import { createHeader, createFooter } from "./components"; // search for index.ts file in ./components

// Barrels du moule SPA (placeholders pour l'instant) :
// import { createHeader, createFooter } from "./components";
// import { pages } from "./pages";

// main function — point d'assemblage : header (onglets) + main (page active) + footer.
function init(): void {
    // function navigate(id: string): void {

    //     // identify page to navigate to from its id
    //     const page = pages.find((p) => p.id === id);
    //     if (!page) return;

    //     // replace current page content with the new content corresponding to page id
    //     main.replaceChildren(page.render());

    //     // toggle "active" class on all tab
    //     header
    //         .querySelectorAll<HTMLButtonElement>(".site-header__tab")
    //         .forEach((b) => b.classList.toggle("active", b.dataset.tabId === id))
    // }

    // create page content
    // const header = createHeader(navigate);
    const header = createHeader();
    const footer = createFooter();
    document.body.append(header, footer);
}

init();
