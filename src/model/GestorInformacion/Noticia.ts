import Admin from '../GestorCuentas/Admin';
export default class Noticia {
    constructor(
        private titulo: string,
        private autor: Admin,
        private fecha: Date,
        private contenido: string
    ) { }
}