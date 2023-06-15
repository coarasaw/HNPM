export class Perfil {
    id: string;
    nombre: string;
    apellido: string;
    edad: string;
    dni: string;
    obraSocial?: string;
    especialidad?:string;
    otraEespecialidad?:string;
    email?: string;
    password?: string;
    perfil?: string;
    fotoPerfilUno?:string;
    fotoPerfilDos?:string;
    aprobadoPorAdmin?:boolean;
    baja?:boolean;

    constructor(
        id: string,
        nombre: string,
        apellido: string,
        edad: string,
        dni: string,
        obraSocial?: string,
        especialidad?:string,
        otraEespecialidad?:string,
        email?: string,
        password?: string,
        perfil?: string,
        fotoPerfilUno?:string,
        fotoPerfilDos?:string,
        aprobadoPorAdmin?:boolean,
        baja?:boolean){
            id: id;
            nombre: nombre;
            apellido: apellido;
            edad: edad;
            dni: dni;
            obraSocial: obraSocial;
            especialida:especialidad;
            otraEespecialidad:otraEespecialidad;
            email: email;
            password: password;
            perfil: perfil;
            fotoPerfilUno:fotoPerfilUno;
            fotoPerfilDos:fotoPerfilDos;
            aprobadoPorAdmin:aprobadoPorAdmin;
            baja:baja;
    }
}
