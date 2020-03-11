import Animal from '../../model/GestorAnimales/Animal';

export default interface FabricaAbstractaAnimales {
    crearAnimal(...args: any[]): Animal;
}
