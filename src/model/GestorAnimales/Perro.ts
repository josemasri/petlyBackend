/** Perro.ts
 * Clase Perro
 * Contiene todos los atributos
 * y métodos de un Perro
 */

import Animal from './Animal';

export default class Perro extends Animal {
    private raza: string;
    private tamano: string;
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
        tamano: string,
    ) {
        super(nombre, estructuraVertebral, tipoReproduccion, medioDeVida, habitosNaturales, excresion, sexo, dieta, edad, img);
        this.raza = raza;
        this.tamano = tamano;
    }
}