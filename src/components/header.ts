// Header component content
import "./header.css";
import logoUrl from "../assets/images/logo.png";

// Interface for the object "Tab"
interface Tab {
    readonly id: string;
    readonly label: string;
}

export function createHeader(onNavigate: (tabId: string) => void): HTMLElement {
    // array of Tab corresponding to individual nav buttons
    const tabs: Tab[] = [
        {id: "home", label: "Home"},
        {id: "menu", label: "Menu"},
        {id: "contact", label: "Contact"},
    ];

    // header container
    const header = document.createElement("header");
    header.className = "site-header";

    // brand identity container
    const identity = document.createElement("div");
    identity.className = "site-identity"

    // logo
    const logo = document.createElement("img");
    logo.src = logoUrl;
    logo.alt = "Logo The Miaowing Nem";
    logo.className = "site-identity__logo";

    // brand name
    const brand = document.createElement("h1");
    brand.className = "site-identity__brand"; // Block Element Modifier convention (BEM)
    brand.textContent = "The Miaowing Nem";

    // nav menu
    const nav = document.createElement("nav");
    nav.className = "site-header__nav";

    // tabs in nav
    for (const tab of tabs) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "site-header__tab";
        btn.dataset.tabId = tab.id; // add data-tabId attributes to identify active tab
        btn.textContent = tab.label;
        nav.append(btn);
    }

    // unique event listener on Nav (bubbling)
    nav.addEventListener("click", (e) => {
        const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".site-header__tab");
        if (!btn || !nav.contains(btn)) return; // in case of clicks out of nav area

        const tabId = btn.dataset.tabId; // set pageId corresponding to tabId data
        if (tabId) onNavigate(tabId);
    });
    
    identity.append(logo, brand);
    header.append(identity, nav);

    return header;
}
