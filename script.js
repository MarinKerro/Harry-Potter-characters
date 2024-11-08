const url = "https://hp-api.onrender.com/api/characters"

async function getCharacters() {
    const response = await fetch(url);
    const data = await response.json();
    const elemnt = document.querySelector('.container')

    for(const character of data.splice(0,30)) {
           elemnt.innerHTML += ` 
            <div class="character">
               <img src="${character.image}" alt="">
                <div>
                <h1>${character.name}</h1> 
                <p>${character.yearOfBirth}</p>
                <p>${character.house} </p>
                <p>${character.actor}</p>
            </div>
        </div>
        `
    }

}
getCharacters();