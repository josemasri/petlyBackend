import FabricaAbstractaAnimales from './FabricaAbstractaAnimales';
import Animal from '../../model/GestorAnimales/Animal';
import Pes from '../../model/GestorAnimales/Pes';

export default class FabricaPeces implements FabricaAbstractaAnimales {
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
        tipoPes: string,
        tipoAgua: string,
        tamano: string
    ): Animal {
        return new Pes(
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
            tipoPes,
            tipoAgua,
            tamano
        );
    }
}
