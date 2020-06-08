/** FabricaRoedores.ts
 * Interfaz concreta
 * que crea objetos
 * de la clase Roedor
 */
import FabricaAbstractaAnimales from './FabricaAbstractaAnimales';
import Animal from '../../model/GestorAnimales/Animal';
import Roedor from '../../model/GestorAnimales/Roedor';

export default class FabricaRoedores implements FabricaAbstractaAnimales {
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
        tipoRoedor: string
    ): Animal {
        return new Roedor(
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
            tipoRoedor
        );
    }
}
