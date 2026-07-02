// App pages register
import { createHome } from "./home";

// pages: registry of pages
interface Page {
    readonly id: string;
    readonly label: string;
    readonly render: () => HTMLElement;
}

// pages register
export const pages: Page[] = [
    { id: "home", label: "Home", render: createHome},
]