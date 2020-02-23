export default class Admin {
    constructor(
        private _id: number,
        private _nombre: string,
        private _apellido: string
    ) {
        
    }

    
    public get id() : number {
        return this._id;
    }

    
    public get nombre() : string {
        return this._nombre;
    }

    
    public get apellido() : string {
        return this._apellido;
    }
    
    
    
}