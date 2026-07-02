// Footer component content
import "./footer.css";

export function createFooter(): HTMLElement {

    // footer container
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    
    // site creator name
    const creator = document.createElement("span");
    creator.textContent = "Created by T.L. - 2026";
    creator.className = "site-footer__creator";

    footer.append(creator);

    return footer;
}
