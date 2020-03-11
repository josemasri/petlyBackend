import FabricaAbstractaAnimales from './FabricaAbstractaAnimales';
import Animal from '../../model/GestorAnimales/Animal';
import Perro from '../../model/GestorAnimales/Perro';

export default class FabricaPerros implements FabricaAbstractaAnimales {
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
        raza: string,
        tamano: string
    ): Animal {
        return new Perro(
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
            tamano
        );
    }
}
