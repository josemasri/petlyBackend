/** Reptil.ts
 * Clase Reptil
 * Contiene todos los atributos
 * y métodos de un Reptil
 */

import Animal from './Animal';

export default class Reptil extends Animal {
    private tipoReptil: string;
    private numeroPatas: number;
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
        tipoReptil: string,
        numeroPatas: number,
    ) {
        super(nombre, estructuraVertebral, tipoReproduccion, medioDeVida, habitosNaturales, excresion, sexo, dieta, edad, img);
        this.tipoReptil = tipoReptil;
        this.numeroPatas = numeroPatas;
    }
}