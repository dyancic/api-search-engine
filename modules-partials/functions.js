export const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export const sortData = (data, parent) => {
    return data.map(({ volumeInfo }, index) => {
        const date = volumeInfo?.publishedDate;
        const bookData = [
            index,
            volumeInfo?.title ?? "",
            volumeInfo?.authors?.[0] ?? volumeInfo?.publisher ?? "",
            date ?? "",
            volumeInfo?.description ?? "",
            volumeInfo?.imageLinks?.thumbnail ?? "./img/no-img.png",
        ];
        createCard(parent, bookData);
        return bookData;
    });
};

export const createCard = (parent, content) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card${content[0]}`;
    const text = document.createElement("div");
    text.className = "card__text";
    text.innerHTML = `<p class="card__title">${content[1]}</p>
    <p class="card__auth">${content[2]} ${content[3]?.split("-")[0]}</p>
    <p class="hidden">${content[4]}</p>`;
    const img = document.createElement("img");
    img.src = content[5];
    img.className = "card__img";

    card.appendChild(img);
    card.appendChild(text);
    parent.appendChild(card);
};
