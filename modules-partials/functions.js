export const getData = async (url) => {
    const response = await fetch(url, {
        headers: { accept: "application/json" },
    });
    return await response.json();
};
