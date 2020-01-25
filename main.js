const root = document.getElementById("root")

fetch('https://swapi.co/api/species/')
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

           <img src="http://starwars-visualguide.com/assets/img/species/${i + 5}.jpg">

           <p class="details"> Classification:<span class="detailsResults"> ${user.classification}</span></p>
           <p class="details"> Designation:<span class="detailsResults"> ${user.designation}</span></p>
           <p class="details"> Average height:<span class="detailsResults"> ${user.average_height}</span></p>
           <p class="details"> Skin colors:<span class="detailsResults"> ${user.skin_colors}</span></p>
           <p class="details"> Hair colors:<span class="detailsResults"> ${user.hair_colors}</span></p>
           <p class="details"> Eye colors:<span class="detailsResults"> ${user.eye_colors}</span></p>
           <p class="details"> Average lifespan:<span class="detailsResults"> ${user.average_lifespan}</span></p>
           <p class="details"> Language:<span class="detailsResults"> ${user.language}</span></p>
       </div>`
            console.log(sablon);


        }
        root.innerHTML += sablon
    })

