import RickAndMortyService from './service.js';


// valor (1 punto)

const service = new RickAndMortyService();
function createCharacterList() {
    const charactersContainer = document.querySelector(".character-list"); 

    service.getAllCharacters()
        .then(characters => {
            characters.forEach(character => {
                const characterCardHTML = createCharacterCard(character);
                const characterCard = document.createElement("div");
                characterCard.innerHTML = characterCardHTML;

                addCharacterListeners(characterCard, character);
                charactersContainer.appendChild(characterCard);
            });
        })
}

// valor (1 punto) HTML

function createCharacterCard(character) {
    var status = "alive"
    if (character.status == "Dead"){
        status = "dead"
    } else if (character.status == "unknown"){
        status = "unknown"
    }
    return `
        <div class="character">
            <img src="${character.image}">
            <div class = "text">
            <div class = "text-name"> ${character.name}</div>
            <div class = "text-status">
            <div class = ${status}></div>
             ${character.status} - ${character.species}</div>
            <div class = "text-secondary">Last known location: </div>
            <div class = "text-principal">${character.location}</div>
            <div class = "text-secondary">First seen in: </div>
            <div class = "text-principal">${character.firstSeen}</div>
            </div>
        </div>
    `;
}

function addCharacterListeners(characterCard, character) {
    characterCard.querySelector("img").addEventListener("click", () => {
        alert(`Hola, soy ${character.name}`);
    });
}
createCharacterList();
