const root = document.getElementById("root")

fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(x => {
        let sablon = ""
        let niz = x.results
        for (let i = 0; i < niz.length; i++) {
            const user = niz[i]
            console.log(user)

            sablon += `
    
       <div class="vrste">
       <div class="holePunch">
           <span class="dot"></span>
           <h1 style="text-align:center;">${user.name}</h1>
        </div>

           <img src="http://starwars-visualguide.com/assets/img/characters/${i+1}.jpg">

           <p class="details"> Height:<span class="detailsResults"> ${user.height}</span></p>
           <p class="details"> Mass:<span class="detailsResults"> ${user.mass}</span></p>
           <p class="details"> Hair color:<span class="detailsResults"> ${user.hair_color}</span></p>
           <p class="details"> Skin color:<span class="detailsResults"> ${user.skin_color}</span></p>
           <p class="details"> Eye colors:<span class="detailsResults"> ${user.eye_colors}</span></p>
           <p class="details"> Birth year:<span class="detailsResults"> ${user.birth_year}</span></p>
           <p class="details"> Gender:<span class="detailsResults"> ${user.gender}</span></p>
       </div>`
            console.log(sablon);


        }
        root.innerHTML += sablon
    })

