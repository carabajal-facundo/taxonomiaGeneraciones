let persona;
let noOpciones = true;

class Persona{
    #nombre;
    #dni;
    #edad;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombre,edad,sexo,peso,altura,anioNac,dni){
        this.#nombre=nombre;
        this.#dni=dni;
        this.#edad=edad;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
        this.#anioNac=anioNac;
    }
    esMayorDeEdad(){
        if(parseInt(this.#edad)>18) alert("Es mayor de edad");
        else alert("Es menor de edad");
    }
    mostrarDatos(){
        alert(`
        Nombre: ${this.#nombre}
        Edad: ${this.#edad}
        DNI: ${this.#dni}
        Sexo: ${this.#sexo}
        peso: ${this.#peso} 
        Altura: ${this.#altura} 
        Año de nacimiento: ${this.#anioNac}
        `);
    }
    mostrarGeneracion(){
        if(this.#anioNac>=1930 && this.#anioNac<=1948){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Silent Generation', la cual tiene como rasgo caracteristico la Austeridad");
        }
        else if(this.#anioNac>=1989 && this.#anioNac<=1968){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Baby boom', la cual tiene como rasgo caracteristico la Ambicion");
        }
        else if(this.#anioNac>=1969 && this.#anioNac<=1980){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Generacion X', la cual tiene como rasgo caracteristico la Obcecion por el exito");
        }
        else if(this.#anioNac>=1981 && this.#anioNac<=1994){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Generacio Y', la cual tiene como rasgo caracteristico la Frustracion");
        }
        else if(this.#anioNac>1993){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Generacion Z', la cual tiene como rasgo caracteristico la Irreberencia");
        }
    }
}

function agregarPersona(){
    let sexoH = document.getElementById('h');
    let sexo;
    if(sexoH.check) sexo = 'H';
    else if(document.getElementById('m').check) sexo = 'M';
    let nombre = document.getElementById("nombreForm").value;
    let edad = document.getElementById("edadForm").value;
    let dni = document.getElementById("dniFomr").value;
    let peso = document.getElementById("pesoForm").value;
    let altura = document.getElementById("alturaForm").value;
    let anioNac = document.getElementById("anionacForm").value;
    if(nombre != '' && edad != '' && dni != '' && peso != '' && altura != '' && anioNac != '' && sexo != ''){
        persona = new Persona(nombre,edad,sexo,peso,altura,anioNac,dni);
        let form = document.querySelector('form');
        if(noOpciones){
            generarOpciones();
            noOpciones=false;
        }
    }
}

function generarOpciones(){
    let seccion = document.querySelector('section');
    let articulo = document.createElement('article');
    seccion.appendChild(articulo);
    articulo.innerHTML = `<article class="container">
    <button class="btn m-4 bg-white" onclick="mostrarGen()">Mostrar generacion</button>
    <button class="btn m-4 bg-white" onclick="mayorDeEdad()">Es mayor de edad?</button>
    <button class="btn m-4 bg-white" onclick="mostrarDatos()">MostrarDatos</button>
</article>`;
}
function mostrarGen(){ persona.mostrarGeneracion(); }

function mayorDeEdad(){ persona.esMayorDeEdad(); }

function mostrarDatos(){ persona.mostrarDatos(); }