console.log("Script loaded successfully");

const cardsDiv = document.getElementById("cards");
console.log("Cards div:", cardsDiv);

async function loadData() {
    console.log("Fetching JSON...");

    const response = await fetch("../../data/contentsdata/Firstyear/Firstyear.json");
    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("JSON Data:", data);

    cardsDiv.innerHTML = "";

    data.forEach(item => {
        console.log("Item:", item);

        if (item.scheme === "2022") {
            cardsDiv.innerHTML += `
                <div class="card" onclick="contentloading('${item.id}', '${item.code}')">
                    <img src="${item.image}" alt="${item.subject}">
                    <h3>${item.subject}</h3>
                    <p>${item.code}</p>
                </div>
            `;
        }
    });
}

loadData();

function contentloading(dataid, datacode) {
    //localStorage.setItem("subjectId", dataid);
    localStorage.setItem("subjectCode", datacode);

    console.log("Stored subjectId:", localStorage.getItem("subjectId"));
    console.log("Stored subjectCode:", localStorage.getItem("subjectCode"));
    window.location.href = `../../views/innerelemets/subject.html`;
}

