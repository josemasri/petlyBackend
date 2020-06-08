/** Noticias.ts
 * Clase Noticias
 * Contenedor de Noticas
 */
import Noticia from './Noticia';
export default class Noticias {
    constructor(
        private _noticias: Noticia[]
    ) { }


    public get noticias(): Noticia[] {
        return this._noticias;
    }
}