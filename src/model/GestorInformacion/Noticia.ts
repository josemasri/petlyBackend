import Admin from '../GestorCuentas/Admin';
export default class Noticia {
    constructor(
        private titulo: string,
        private autor: number,
        private contenido: string
    ) { }
}