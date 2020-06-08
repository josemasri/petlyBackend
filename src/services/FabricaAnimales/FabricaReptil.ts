/** FabricaReptlies.ts
 * Interfaz concreta
 * que crea objetos
 * de la clase Reptil
 */
import FabricaAbstractaAnimales from './FabricaAbstractaAnimales';
import Animal from '../../model/GestorAnimales/Animal';
import Reptil from '../../model/GestorAnimales/Reptil';

export default class FabricaReptiles implements FabricaAbstractaAnimales {
    crearAnimal(
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
        numPatas: number
    ): Animal {
        return new Reptil(
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
            tipoReptil,
            numPatas
        );
    }
}
