import FabricaAbstractaAnimales from './FabricaAbstractaAnimales';
import Animal from '../../model/GestorAnimales/Animal';
import Ave from '../../model/GestorAnimales/Ave';

export default class FabricaAves implements FabricaAbstractaAnimales {
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
        tipoAve: string,
        TipoPico: string
    ): Animal {
        return new Ave(
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
            tipoAve,
            TipoPico
        );
    }
}
