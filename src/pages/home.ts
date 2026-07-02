// Home page component content
export function createHome(): HTMLElement {
    const home = document.createElement("div");
    home.className = "page-home";

    const introduction = document.createElement("div");
    introduction.className = "intro-content"; // shared class

    const introTitle = document.createElement("h2");
    introTitle.className = "intro-content__title"
    introTitle.textContent = "Welcome to the best chinese restaurant !";

    const introText = document.createElement("p");
    introText.className = "intro-content__text"
    introText.textContent = "test text";

    introduction.append(introTitle, introText);
    home.append(introduction);

    return home;
}