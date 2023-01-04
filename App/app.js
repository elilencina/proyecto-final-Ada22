const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

fetch(URL_API)
.then((Response) => Response.json())
.then((data) => {
    const characters = data.results;

    for (let character of characters) {
        console.log(character);
        $container.innerHTML += `
        <div class="container">
        <img class="img-character" src="${character.image}" 
        alt="imágen de ${character.name}"> 
        <h3>${character.name}</h3>
        <p class="species">${character.species}<p>
        </div>
        `;
    }
});
