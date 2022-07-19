import { getData } from "./modules-partials/functions.js";

const cardContainer = document.querySelector(".container");
const input = document.getElementById("searchBar");
const btn = document.querySelector("button");

const searchEvent = async (searchTerms) => {
    const data = await getData(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms
            .split(" ")
            .join("+")}`,
    );
    console.log(data);
    data.items.forEach((book) => {
        const date = book.volumeInfo.publishedDate.split("-");
        const year = date[0];
        const author = book.volumeInfo.authors[0];
        cardContainer.innerHTML += `<div class="card"><img src="${book.volumeInfo.imageLinks.thumbnail}"><p class="card__title">${book.volumeInfo.title}</p><p class="card__author">${author}</p><p class="card__year">${year}</p></div>`;
    });
};

btn.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    searchEvent(input.value);
});
