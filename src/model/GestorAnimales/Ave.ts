import Animal from './Animal';

export default class Ave extends Animal {
    private tipoAve: string;
    private tipoPico: string;
    constructor(
        nombre: string,
        estructuraVertebral: string,
        tipoReproduccion: string,
        medioDeVida: string,
        habitosNaturales: string,
        excresion: string,
        sexo: string,
        dieta: string,
        edad: number,
        img: string,
        tipoAve: string,
        tipoPico: string,
    ) {
        super(nombre, estructuraVertebral, tipoReproduccion, medioDeVida, habitosNaturales, excresion, sexo, dieta, edad, img);
        this.tipoAve = tipoAve;
        this.tipoPico = tipoPico;
    }
}