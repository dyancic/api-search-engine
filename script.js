import { getData, createCard, sortData } from "./modules-partials/functions.js";

const cardContainer = document.querySelector(".container");
const input = document.getElementById("searchBar");
const btn = document.querySelector("button");
let currentSearch;

const searchEvent = async (searchTerms) => {
    if (input.value === "") {
        cardContainer.innerText = "Please enter a search term...";
        return;
    }
    const searchQuery = document.querySelector(
        'input[name = "search"]:checked',
    );
    const data = await getData(
        `https://www.googleapis.com/books/v1/volumes?q=${
            searchQuery.id
        }:${searchTerms.split(" ").join("+")}&maxResults=40`,
    );
    cardContainer.innerHTML = "";
    data.totalItems < 1
        ? (cardContainer.innerText = "no results found")
        : (currentSearch = sortData(data.items, cardContainer));
};

btn.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    searchEvent(input.value);
});

window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchEvent(input.value);
});
