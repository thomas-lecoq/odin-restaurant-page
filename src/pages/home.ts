// Home page component content
import "./home.css";

export function createHome(): HTMLElement {
    const home = document.createElement("div");
    home.className = "page-home";

    // introduction
    const introduction = document.createElement("div");
    introduction.className = "page-content"; // shared class

    const introTitle = document.createElement("h2");
    introTitle.className = "intro-content__title";
    introTitle.textContent = "Best Eats in town - No Contest";

    const introText = document.createElement("p");
    introText.className = "intro-content__text"
    introText.textContent =
        "Around here, nobody does it like we do. Every plate is made from scratch, " +
        "packed with flavor, and served with a little attitude. Freshest ingredients, " +
        "bold recipes, and food that'll ruin every other spot for you. " +
        "Best eats in town? Yeah, that's us — pull up a chair and taste why.";

    introduction.append(introTitle, introText);

    //opening hours
    const hours = document.createElement("div");
    hours.className = "page-content";

    const hoursTitle = document.createElement("h2");
    hoursTitle.className = "hours-content__title";
    hoursTitle.textContent = "Opening Hours";

    const hoursList = document.createElement("ul");
    hoursList.className = "hours-content__text";

    const openingHours = [
        "Monday: 11:00 AM – 10:00 PM",
        "Tuesday: 11:00 AM – 10:00 PM",
        "Wednesday: 11:00 AM – 10:00 PM",
        "Thursday: 11:00 AM – 10:00 PM",
        "Friday: 11:00 AM – 11:00 PM",
        "Saturday: 11:00 AM – 11:00 PM",
        "Sunday: Closed — come on, give us a break!",
    ];

    for (const entry of openingHours) {
        const item = document.createElement("li");
        item.textContent = entry;
        hoursList.append(item);
    }

    hours.append(hoursTitle, hoursList);

    // location
    const location = document.createElement("div");
    location.className = "page-content";

    const locationTitle = document.createElement("h2");
    locationTitle.className = "location-content__title";
    locationTitle.textContent = "Location";

    const locationText = document.createElement("p");
    locationText.className = "location-content__text";
    locationText.textContent = 
        "42 ya mom's place, coding avenue, MagicInternet Town";

    location.append(locationTitle, locationText);

    // assembly to home
    home.append(introduction, hours, location);

    return home;
}
