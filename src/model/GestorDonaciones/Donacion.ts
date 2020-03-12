export default class Donacion {
    constructor(
        private nombre: string,
        private apellido: string,
        private cantidad: number,
        private email: string,
        private periodo: string,
        private direccion: string
    ) {}
}