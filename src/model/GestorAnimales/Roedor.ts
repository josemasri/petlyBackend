/** Roedor.ts
 * Clase Roedor
 * Contiene todos los atributos
 * y métodos de un Roedor
 */

import Animal from './Animal';

export default class Roedor extends Animal {
    private tipoRoedor: string;
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
        tipoRoedor: string,
    ) {
        super(nombre, estructuraVertebral, tipoReproduccion, medioDeVida, habitosNaturales, excresion, sexo, dieta, edad, img);
        this.tipoRoedor = tipoRoedor;
    }
}