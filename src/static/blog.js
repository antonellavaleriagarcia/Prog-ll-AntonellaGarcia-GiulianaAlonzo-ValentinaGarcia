
//JSON
let noticias = document.getElementById("noticias");
let datos;

fetch("static/datos.json")
    .then((res) => res.json())
    .then((data)=> {
        setTimeout(()=>{
        datos = data;
        console.log(datos);
        datos.forEach((element) => {
            let div = document.createElement("div");
            div.className = "col-12 news-card"
            div.innerHTML = `
            <div class="card h-100">
            <img src="${element.Imagen}" class="card-img-top" alt="...">
            <div class="card-body" >
                <h5 class="card-title">${element.Titulo}</h5>
                <p class="card-text">${element.Bajada}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#colapsar${element.Id}" aria-expanded="false" aria-controls="collapseExample">Ver más</button>
                <div class="card-text collapse" id="colapsar${element.Id}"><p>${element.Cuerpo}</p></div>
                </div>
            </div>
            </div>`;
            noticias.append(div);
        })
    }, 100)
    } );
