export class Repartidor {
    nombre: string;
    dni: number;
    edad: number;
    capcidad: number;
    unidad: boolean;
    pais:string;

    constructor(nombre: string, dni: number, edad: number, capcidad: number,unidad: boolean, pais: string) {
          this.nombre = nombre;
          this.dni = dni;
          this.edad = edad;
          this.capcidad = capcidad;
          this.unidad = unidad;
          this.pais = pais;
      }
}