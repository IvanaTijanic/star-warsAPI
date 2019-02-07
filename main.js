const root = document.getElementById("root")

fetch('https://swapi.co/api/species/')
    .then(response => response.json())
    .then(x => {
    let sablon =""
    let niz = x.results
    for(let i=0; i < niz.length; i++){
        const user = niz[i]
       console.log(user)

       sablon += `
    
       <div class="vrste">
           <h1 style="text-align:center;">${user.name}</h1>

           <img src="http://starwars-visualguide.com/assets/img/species/${i+5}.jpg">

           <p> Klasifikacija: ${user.classification}</p>
           <p> Ishrana: ${user.designation}</p>
           <p> Prosecna visina: ${user.average_height}</p>
           <p> Boja kože: ${user.skin_colors}</p>
           <p> Boja kose: ${user.hair_colors}</p>
           <p> Boja ociju: ${user.eye_colors}</p>
           <p> Prosecna starost: ${user.average_lifespan}</p>
           <p> Govorni jezik: ${user.language}</p>
       </div>`  
       console.log(sablon);
     
       
     } 
     root.innerHTML += sablon
})

  