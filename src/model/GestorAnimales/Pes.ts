/** Pes.ts
 * Clase Pes
 * Contiene todos los atributos
 * y métodos de un Pes
 */

import Animal from './Animal';

export default class Pes extends Animal {
    private tipoPez: string;
    private tipoAgua: string;
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
        tipoPez: string,
        tipoAgua: string,
        tamano: string
    ) {
        super(nombre, estructuraVertebral, tipoReproduccion, medioDeVida, habitosNaturales, excresion, sexo, dieta, edad, img);
        this.tipoPez = tipoPez;
        this.tipoAgua = tipoAgua;
        this.tamano = tamano;
    }
}