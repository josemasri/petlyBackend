/** Usuario.ts
 * Clase Usuario
 * Contiene todos los atributos
 * y métodos de un Usuario
 */

export default class Usuario {
    constructor(
        private nombre: string,
        private apellidoPaterno: string,
        private apellidoMaterno: string,
        private email: string,
        private password: string,
        private rol: string = "USER_ROLE"
    ) { }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }
}