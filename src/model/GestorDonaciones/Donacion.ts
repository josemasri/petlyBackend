export default class Donacion {
    constructor(
        private nombre: string,
        private apellidoPaterno: string,
        private apellidoMaterno: string,
        private cantidad: number,
        private email: string,
    ) {}
    public getNombre() {
        return this.nombre;
    }
    public getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    public getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    public getCantidad() {
        return this.cantidad;
    }
    public getEmail() {
        return this.email;
    }
}