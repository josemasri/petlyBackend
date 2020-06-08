/** Gato.ts
 * Clase Gato
 * Contiene todos los atributos
 * y métodos de un Gato
 */


import Animal from './Animal';

export default class Gato extends Animal {
    private raza: string;
    private pelaje: string;
    constructor(
        nombre: string,
        estructuraVertebral: string,
        tipoReproduccion: string,
        medioDeVida: string,
        habitosNaturales: string,
        excresion: string,
        sexo: string,
        dieta: string,
        edad: number,
        img: string,
        raza: string,
        pelaje: string,
    ) {
        super(nombre, estructuraVertebral, tipoReproduccion, medioDeVida, habitosNaturales, excresion, sexo, dieta, edad, img);
        this.raza = raza;
        this.pelaje = pelaje;
    }
}