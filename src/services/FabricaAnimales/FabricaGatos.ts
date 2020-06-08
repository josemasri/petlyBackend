/** FabricaGatos.ts
 * Interfaz concreta
 * que crea objetos
 * de la clase Gato
 */

import FabricaAbstractaAnimales from './FabricaAbstractaAnimales';
import Animal from '../../model/GestorAnimales/Animal';
import Gato from '../../model/GestorAnimales/Gato';

export default class FabricaGatos implements FabricaAbstractaAnimales {
    public crearAnimal(
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
        colorPelaje: string
    ): Animal {
        return new Gato(
            nombre,
            estructuraVertebral,
            tipoReproduccion,
            medioDeVida,
            habitosNaturales,
            excresion,
            sexo,
            dieta,
            edad,
            img,
            raza,
            colorPelaje
        );
    }
}
