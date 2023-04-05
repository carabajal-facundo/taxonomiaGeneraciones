class Persona{
    #nombre;
    #dni;
    #edad;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombre,edad,sexo,peso,altura,anioNac){
        this.#nombre=nombre;
        this.generarDNI();
        this.#edad=edad;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
        this.#anioNac=anioNac;
    }
    esMayorDeEdad(){
        if(this.edad>18) alert("Es mayor de edad");
        else alert("Es menor de edad");
    }
    mostrarDatos(){
        document.write("Nombre: " + this.#nombre + "<br>");
        document.write("Edad: " + this.#edad + "<br>");
        document.write("DNI: " + this.#dni + "<br>");
        document.write("Sexo: " + this.#sexo + "<br>");
        document.write("peso: " + this.#peso + "<br>");
        document.write("Altura: " + this.#altura + "<br>");
        document.write("Año de nacimiento: " + this.#anioNac + "<br><br>");
    }
    generarDNI(){
        this.#dni= Math.floor(Math.random() * (100000000-10000000)+10000000);
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