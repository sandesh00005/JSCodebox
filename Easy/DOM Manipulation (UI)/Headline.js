// Given is a text headline. Write this string in a h1 HTML tag and append it to the HTML body.

function printHeadline(headline) {
    let title = document.createElement("h1");
    title.innerHTML = headline;
    document.body.append(title);
}