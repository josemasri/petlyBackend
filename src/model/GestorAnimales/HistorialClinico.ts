/** HistrorialClinico.ts
 * Es una clase que contiene un arreglo
 * de incidencias de cada animal
 */

import Incidencia from "./Incidencia";

export default class HistorialClinico {
  constructor(private incidencias: Incidencia[]) {}
  public getIncidencias() {
    return [...this.incidencias];
  }
  public setIncidencias(incidencias: Incidencia[]) {
    this.incidencias = incidencias;
  }
}
