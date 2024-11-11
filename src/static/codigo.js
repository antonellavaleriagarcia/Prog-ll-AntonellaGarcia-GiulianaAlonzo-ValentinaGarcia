//CLIENTES
class Persona {
    constructor(nombre, apellido, edad, mail, contrasenia, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
    }
}

const clientes = []
const agregarClienteLista = (persona) => {
    clientes.push(persona)
}

/*const cliente1 = new Persona("Maria", "Zucchi", 52, "marita@gmail.com", 145145, 3415898989);
agregarClienteLista(cliente1);
const cliente2 = new Persona("Juan", "Zucchi", 45, "juancito@gmail.com", 222222, 3413565656);
agregarClienteLista(cliente2);*/

const verListaClientes = () => {
    return clientes;
}

console.log(verListaClientes());
const getNombre = document.getElementById("nombre");
const getApellido = document.getElementById("apellido");
const getEdad = document.getElementById("edad");
const getMail = document.getElementById("mail");
const getContrasenia = document.getElementById("contrasenia");
const getTelefono = document.getElementById("telefono");
const form = document.getElementById("formulario");

const crearCliente = (client) => {
    clientes.push(client)
    localStorage.setItem("clientes", JSON.stringify(clientes))
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const nombre= getNombre.value
    const apellido = getApellido.value
    const edad = getEdad.value
    const mail = getMail.value
    const contrasenia = getContrasenia.value
    const telefono = getTelefono.value

    let cliente = new Persona(nombre, apellido, edad, mail, contrasenia, telefono);

    crearCliente(cliente)
})

const usuario = []

let clientesJS = JSON.parse(localStorage.getItem('clientes')) || []

class Usu {
    constructor(mail, contraseña){
        this.mail = mail;
        this.contraseña = contraseña;
       
    }
}
 
function recordarUsuario(array){
for (let i = 0; i < array.length; i++){
    let {mail : usu} = array[i];
    let {contrasenia : contra} = array[i];
    aux = new Usu(usu, contra);
    usuario.push(aux);
    console.log(usuario) 
    localStorage.setItem("usuario", JSON.stringify(usuario))
}
}
recordarUsuario(clientesJS);

const usuarioini = document.getElementById("Usuario");
const contra = document.getElementById("contrase");

let iniciar = document.getElementById("formularioIniciar");

iniciar.addEventListener("submit", e => {
    e.preventDefault()
    const usuin= usuarioini.value
    const contrain = contra.value
    
    const recordar = new Usu(usuin, contrain);
    guardar(recordar);
})

const boton = document.getElementById("boton");
const este = document.getElementById("este");
const botonson = document.getElementById("botonson");
const botonsin = document.getElementById("botonsin");

function guardar(item){
    if(usuario.find(i => i.mail === item.mail)&&usuario.find(i => i.contraseña === item.contraseña)){
        console.log(item);
        for (let i = 0; i < clientesJS.length; i++){
           if(item.mail === clientesJS[i].mail){
            boton.innerText = ` ${clientesJS[i].nombre}`;
            botonson.innerText= " ";
            botonsin.innerText=" ";
            const boti = document.createElement("div");
            boti.innerHTML = `<li id="botonsin"><button id="botoncerrar" type="submit" class="dropdown-item" href="#">Cerrar sesion</button></li>`;
            botonsin.append(boti);
            }
        }
     }else{
         swal ({
                title: "Ese usuario todavia no fue registrado",
                icon: "warning"
            })
     }
}

const asd = document.getElementById("botoncerrar");

console.log(verListaClientes());

//PRODUCTOS
//Clase producto
class Producto {

    constructor(nombre, precio, imagen, descripcion, categoria, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
    }

}
//Creo array para productos
const productos = []
//Creo funcion para agregar objetos al array
const agregarProductoLista = (objeto) => {
    productos.push(objeto);
}

//Creo funcion para visualizar array
const verListaProductos = () => {
    return productos;
}

//Creo productos
const amazonia=new Producto ("AMAZONIA", 600, "static/img/amazonia.jpg", "Poetenciador Radicular, bio-estimulante orgánico que promueve la formación de raíces fuertes y sanas, tallos vigorosos. Mejora la asimilacion de nutrientes, mejora las condiciones del suelo, promueve la formación de micro-organismo beneficiosos para el suelo y para las plantas", "Fertilizantes", 6)
const cultivante=new Producto("CULTIVATE", 2000, "static/img/coco.webp", "Sustrato Premium con el agregado óptimo de fibra de coco, que ofrece a las raíces un mejor acceso al aire y los nutrientes, para que crezcan más sanas y fuertes.", "Sustratos & Macetas", 4)
const carpa=new Producto("CARPA", 1000, "static/img/carpa.png", "Especificaciones técnicas:• Carpa Probox suiza 100 x 100 x 200 cm.• Posee mylar 420D, 100% aprueba de luz.• Doble cierre reforzado.• Estructura sólida, varillas y base doble.• Tubos de refrigeración incorporados. • Caja cerrada.", "Indoor", 8)
const maceta=new Producto ("MACETA", 950, "static/img/maceta.jpg", "Sistema de guias internas que evitan estrangulacion y genera una autopoda aerea de tus raices, logrando un desarrollo explosivo. Su exclusivo sistema de drenaje, no solo evita exceso de humedad, sino que te permite olvidarte de usar leca en tus plantas. Medidas Boca: 22 x 22cm Alto: 34 cm Base: 14 x 14cm", "Sustratos & Macetas", 10)
const feeding=new Producto("FEEDING", 1950, "static/img/feeding.jpg", "Alchimia os presenta la versión 125gr del abono Powder Feeding Hybrids de Green House, con ratio NPK de 15-7-22, idóneo para todo el ciclo de cultivo de las variedades de marihuana híbridos Indica - Sativa. Este abono mineral soluble asegura que nuestras plantas disponen de todos los nutrientes que necesitan para un crecimiento fuerte y una floración explosiva. Solo bastará diluir 0.5 hasta 2 gramos de Powder Feeding Hybrids por cada litro de agua, según la etapa del desarrollo de nuestras plantas. Características de G", "Sustratos & Macetas", 5)
const cooler = new Producto("COOLER", 2600, "static/img/cooler.jpg","Descripción Turbina de 120x120mm con rodamiento.  Carcasa de aluminio con paletas plásticas. Salida con chicote de cable de aproximadamente 15 centímetros Soplador / Turbina / Cooler / FAN de 120mmx120mmx38mm Caracteristicas: Dimensiones: 120x120x25mm", "Indoor", 4)
const balanza= new Producto("BALANZA", 1500, "static/img/balanza.jpg", "CARACTERISTICAS: UNIDADES DE PESAJE: Gramos / Onza / DWT. CAPACIDAD MAXIMA: 500 gramos. PRECISION: 0,1 gramo MEDIDAS: 12,00 cm. x 6,20 cm. x 2,00 cm. SISTEMA DE FRENO SIMPLE.", "Accesorios", 8)
const estaca = new Producto("ESTACA", 450, "static/img/estaca.png", "Estaca de riego por goteo. La misma permite colocar cualquier botella de PVC común con pico de 1/2. Pueden ser botellas de 500 cc hasta 2 litros. Tiene regulador de caudal del riego por goteo, puede ser lento, normal, rápido y muy rápido. Muy fácil de usar e instalar. Ideal para macetas o huerta.", "Accesorios", 4)
const amazing = new Producto("AMAZING", 2700, "static/img/amazing.png", "ADITIVO DE SILICIO PARA EL RENDIMIENTO VEGETAL ALIEN SKIN ofrece los beneficios del sílice otorgando a tus plantas resistencia al estrés y un aumento de la producción y el rendimiento. Benéfico en cultivos hidropónicos, coco o sustrato. Es un potenciador del crecimiento que pude ser usado junto con cualquier fertilizante base. El silcio es el segundo elemento más abundante de la corteza terrestre, su aporte proporciona troncos más fuertes, y una mejor captura de la luz, lo que se traduce en cogollos más densos, de mayor peso y tamaño.", "Fertilizantes", 5)
const azteca= new Producto("AZTEKA", 1650, "static/img/azteca.jpg", "Compuesto liquido a base de Bacillius y bacterias, formulado específicamente para potenciar el desarrollo radicular y crecimiento de las plantas. Producción explosiva de raíces, mayor resistencia a la sequía. Aumenta el rendimiento. Fija el nitrógeno atmosférico. Hace viable la disolución de fósforo y potasio.", "Fertilizantes", 3)
const jabon= new Producto("JABÓN", 500, "static/img/jabon.png", "El jabón potásico es un insecticida y acaricida que combate eficazmente al pulgón, la cochinilla, la mosca blanca, los trips y la araña roja, entre otros; sin toxicidad para el ser humano y otros animales. Este plaguicida ecológico actúa por contacto; reblandeciendo la cutícula protectora de los parásitos, que utilizan además para respirar. Provoca la asfixia de éstos, sin dañar a otros insectos beneficiosos como las abejas o sus propios predadores naturales, útiles también para controlar la plaga. Este plaguicida no entra en la planta (no es sistémico) y se degrada rápidamente, por lo que no requiere plazo de seguridad. Además, tiene un efecto limpiador sobre las hojas: lava los residuos generados por los insectos, evitando la aparición de la negrilla. También es útil para combatir este hongo al inicio de la infección. Es biodegradable e inocuo. Para colmo, de rebote, es una fuente de potasio para las plantas. El mejor momento para realizar el tratamiento será a la salida o la puesta del sol, en ausencia de viento y de lluvia que lave la aplicación. Serán convenientes varios tratamientos para controlar la plaga. Lo ideal es repetirlos entre 3 y 4 veces, dejando una semana de descanso entre ellos.", "Plagas y hongos ", 8)
const alambre= new Producto("ALAMBRE", 1450, "static/img/alambre.jpg", "Material: Plástico Color: verde Longitud: 50 metros Calidad superior, durable y útil Viene con un cortador práctico, solo presione para cortar la longitud que necesita Herramienta de jardinería multifuncional, puede usarlo para plantas fijas, bolsas de unión, líneas de punción, etc.", "Accesorios", 5)

//Agrego productos al array
agregarProductoLista(amazonia);
agregarProductoLista(cultivante);
agregarProductoLista(carpa);
agregarProductoLista(maceta);
agregarProductoLista(feeding);
agregarProductoLista(cooler);
agregarProductoLista(balanza);
agregarProductoLista(estaca);
agregarProductoLista(amazing);
agregarProductoLista(azteca);
agregarProductoLista(jabon);
agregarProductoLista(alambre);

//Visualizo el array
console.log(verListaProductos());

const totalPlata = document.getElementById("total");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.forEach((item) => {
        const fila = document.createElement("tr")
        fila.innerHTML= `<th>${item.nombre}</th><th>${item.precio}</th><th>${item.cantidad}</th>` 
        tcuerpo.append(fila)

       const pos = carrito.indexOf(item);

       
       const suma = document.createElement("button");
       suma.className = "btn btn-primary";
       suma.innerText = "+";
       const resta = document.createElement("button");
       resta.className = "btn btn-primary";
       resta.innerText = "-";
       
       const thh=document.createElement("th");
       thh.append(suma)
       thh.append(resta)
       fila.append(thh)
       tcuerpo.append(fila)

       suma.onclick = () => {
           carrito.forEach(x => {
                (x.nombre==item.nombre) ? x.cantidad += 1 : false
            })
        listadoUpdate(carrito);
       };
       resta.onclick = () => {
        if(item.cantidad>=1){
        carrito.forEach(x => {
         (x.nombre==item.nombre) ? x.cantidad -= 1 : false
        })
        listadoUpdate(carrito);}
    }
       
   
       const eliminar = document.createElement("button");
       eliminar.className = "btn btn-danger";
       eliminar.innerText = "Eliminar";
       eliminar.onclick = () => {
           carrito.forEach(x => {
            (x.nombre==item.nombre) ? carrito.splice(pos, 1) : false
           })
           listadoUpdate(carrito);}
       
       const th = document.createElement("th");
       th.append(eliminar);
       fila.append(th);
       tcuerpo.append(fila);
      
    });
     totalPlata.innerText = carrito.reduce(
         (total, item) => total += item.precio * item.cantidad,
         0
     );

let contenedor = document.getElementById("items");

function newItem(item){

        if(carrito.find(i => i.nombre === item.nombre)){
            
           carrito.forEach(x => {
               (x.nombre==item.nombre) ? x.cantidad += 1 : false
           })
           console.log(carrito);
           listadoUpdate(carrito);
           swal ({
               title: "Añadio al carrito con exito",
               icon: "success"
           })
                    
        }else{
            item.cantidad=1;
            carrito.push(item);
            console.log(carrito);
            listadoUpdate(carrito);
            swal ({
                title: "Añadio al carrito con exito",
                icon: "success"
            })
        }
}

function agregarItemHtml(items){
    items.forEach((item) => {
        const div = document.createElement("div");
        div.className = "col-4"
        div.innerHTML = ` <div>
        <div class="card h-100">
        <img src="${item.imagen}" class="card-img-top altoimagen" alt="...">
        <div class="card-body card-tienda" >
            <h5 class="card-title" id="nombre">${item.nombre}</h5>
            <p class="card-text" id="precio">$ ${item.precio}</p>
            <div class="d-grid gap-1">
                <button class="btn btn-outline" type="button" data-bs-toggle="collapse" data-bs-target="#colapsar${item.nombre}" aria-expanded="false" aria-controls="collapseExample">Ver más</button>
                <button class="btn btn-primary" id="agregar${item.nombre}">Comprar</button>
            </div>
            <div class="card-text collapse" id="colapsar${item.nombre}"><p class="margen">${item.descripcion}</p></div>
        </div>
        </div>    
        </div>`;
        contenedor.append(div);
        let botonAgregar = document.getElementById(`agregar${item.nombre}`);
        botonAgregar.onclick = () => {
            newItem(item); 
        }
    });
}

agregarItemHtml(productos);

function listadoUpdate(array) {
    tcuerpo.innerHTML = "";
    array.forEach((item) => {
       const fila = document.createElement("tr")
       fila.innerHTML= `<th>${item.nombre}</th><th>${item.precio}</th><th>${item.cantidad}</th>` 
       tcuerpo.append(fila)
       const pos = carrito.indexOf(item);
       const suma = document.createElement("button");
       suma.className = "btn btn-primary";
       suma.innerText = "+";
       const resta = document.createElement("button");
       resta.className = "btn btn-primary";
       resta.innerText = "-";
       
       const thh=document.createElement("th");
       thh.append(resta)
       thh.append(suma)
       fila.append(thh)
       tcuerpo.append(fila)

       suma.onclick = () => {
        carrito.forEach(x => {
             (x.nombre==item.nombre) ? x.cantidad += 1 && x.cantidad<item.stock : false
         })
         listadoUpdate(carrito);
    };
        resta.onclick = () => {
        if(item.cantidad>=1){
        carrito.forEach(x => {
         (x.nombre==item.nombre) ? x.cantidad -= 1 : false
        })
        listadoUpdate(carrito);}
    };
   
       
   
       const eliminar = document.createElement("button");
       eliminar.className = "btn btn-danger";
       eliminar.innerText = "Eliminar";
       eliminar.onclick = () => {
        carrito.forEach(x => {
         (x.nombre==item.nombre) ? carrito.splice(pos, 1) : false
        })
        listadoUpdate(carrito);}
       const th = document.createElement("th");
       th.append(eliminar);
       fila.append(th);
       tcuerpo.append(fila);
    });
    totalPlata.innerText = array.reduce(
        (total, item) => total += item.precio * item.cantidad,
        0
    );
    const guardarCarrito = (array) => {
        localStorage.setItem("carrito", JSON.stringify(array));
    } 
    guardarCarrito(array);
}

vaciar.onclick = () => {
    swal ({
        title: "Esta seguro que desea vaciar el carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito))
        listadoUpdate(carrito); 
        totalPlata.innerText = "0";
        swal("Su carrito ha sido vaciado", {
        icon: "success",
        });
    } else {
        swal("No fue elimado");
    }
    });
};
comprar.onclick = () => {
    if(carrito.length>0){
    swal ({
        title: "Tu compra fue exitosa",
        icon: "success"
    })
    carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito))
        listadoUpdate(carrito); 
        totalPlata.innerText = "0";
    }else{
        swal ({
            title: "Tu carrito esta vacio",
            icon: "warning"
        })
    }
}

