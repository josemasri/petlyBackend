/** Animal.ts
 * Clase abstracta Animal
 * Contiene todos los atributos
 * de un animal 
 */ 

export default class Animal {
  private nombre: string;
  private estructuraVertebral: string;
  private tipoReproduccion: string;
  private medioDeVida: string;
  private habitosNaturales: string;
  private excresion: string;
  private sexo: string;
  private dieta: string;
  private edad: number;
  private img: string;

  constructor(
    $nombre: string,
    $estructuraVertebral: string,
    $tipoReproduccion: string,
    $medioDeVida: string,
    $habitosNaturales: string,
    $excresion: string,
    $sexo: string,
    $dieta: string,
    $edad: number,
    $img: string
  ) {
    this.nombre = $nombre;
    this.estructuraVertebral = $estructuraVertebral;
    this.tipoReproduccion = $tipoReproduccion;
    this.medioDeVida = $medioDeVida;
    this.habitosNaturales = $habitosNaturales;
    this.excresion = $excresion;
    this.sexo = $sexo;
    this.dieta = $dieta;
    this.edad = $edad;
    this.img = $img;
  }

  /**
   * Getter $nombre
   * @return {string}
   */
  public get $nombre(): string {
    return this.nombre;
  }

  /**
   * Getter $estructuraVertebral
   * @return {string}
   */
  public get $estructuraVertebral(): string {
    return this.estructuraVertebral;
  }

  /**
   * Getter $tipoReproduccion
   * @return {string}
   */
  public get $tipoReproduccion(): string {
    return this.tipoReproduccion;
  }

  /**
   * Getter $medioDeVida
   * @return {string}
   */
  public get $medioDeVida(): string {
    return this.medioDeVida;
  }

  /**
   * Getter $habitosNaturales
   * @return {string}
   */
  public get $habitosNaturales(): string {
    return this.habitosNaturales;
  }

  /**
   * Getter $excresion
   * @return {string}
   */
  public get $excresion(): string {
    return this.excresion;
  }

  /**
   * Getter $sexo
   * @return {string}
   */
  public get $sexo(): string {
    return this.sexo;
  }

  /**
   * Getter $dieta
   * @return {string}
   */
  public get $dieta(): string {
    return this.dieta;
  }

  /**
   * Getter $edad
   * @return {number}
   */
  public get $edad(): number {
    return this.edad;
  }

  /**
   * Getter $img
   * @return {string}
   */
  public get $img(): string {
    return this.img;
  }

  /**
   * Setter $nombre
   * @param {string} value
   */
  public set $nombre(value: string) {
    this.nombre = value;
  }

  /**
   * Setter $estructuraVertebral
   * @param {string} value
   */
  public set $estructuraVertebral(value: string) {
    this.estructuraVertebral = value;
  }

  /**
   * Setter $tipoReproduccion
   * @param {string} value
   */
  public set $tipoReproduccion(value: string) {
    this.tipoReproduccion = value;
  }

  /**
   * Setter $medioDeVida
   * @param {string} value
   */
  public set $medioDeVida(value: string) {
    this.medioDeVida = value;
  }

  /**
   * Setter $habitosNaturales
   * @param {string} value
   */
  public set $habitosNaturales(value: string) {
    this.habitosNaturales = value;
  }

  /**
   * Setter $excresion
   * @param {string} value
   */
  public set $excresion(value: string) {
    this.excresion = value;
  }

  /**
   * Setter $sexo
   * @param {string} value
   */
  public set $sexo(value: string) {
    this.sexo = value;
  }

  /**
   * Setter $dieta
   * @param {string} value
   */
  public set $dieta(value: string) {
    this.dieta = value;
  }

  /**
   * Setter $edad
   * @param {number} value
   */
  public set $edad(value: number) {
    this.edad = value;
  }

  /**
   * Setter $img
   * @param {string} value
   */
  public set $img(value: string) {
    this.img = value;
  }
}
