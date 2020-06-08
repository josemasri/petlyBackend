/** FabricaAbstractaAnimales.ts
 * Interfaz fábrica abstracta
 * que se implementa en las fabricas concretas
 */
import Animal from "../../model/GestorAnimales/Animal";

export default interface FabricaAbstractaAnimales {
  crearAnimal(...args: any[]): Animal;
}
