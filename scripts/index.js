console.log("Hello, World!");

const content = document.getElementById("contents");
let data;

async function dataloading() {
    const response = await fetch("/data/herosection.json");
    return await response.json();
}

async function main() {
    data = await dataloading();

    content.innerHTML = data.map(element => `
        <div class="card" onclick="contentloading('${element.location}')">
            <img src="${element.image}" alt="${element.title}">
            <h2>${element.title}</h2>
            <p>${element.description}</p>
        </div>
    `).join("");
}

// Redirect to inner page with id
function contentloading(dataid) {
    window.location.href = `${dataid}`;
}

main();
