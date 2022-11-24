export class Usuario {
    
    nombre: string;
    apellido: string;
    edad: string;
    dni: string;
    obraSocial?: string;
    especialidad?:string;
    email?: string;
    password?: string;
    perfil?: string;
    fotoPerfilUno?:string;
    fotoPerfilDos?:string;
    aprobadoPorAdmin?:boolean;
    baja?:boolean;

    constructor(nombre: string,
        apellido: string,
        edad: string,
        dni: string,
        obraSocial?: string,
        especialidad?:string,
        email?: string,
        password?: string,
        perfil?: string,
        fotoPerfilUno?:string,
        fotoPerfilDos?:string,
        aprobadoPorAdmin?:boolean,
        baja?:boolean){
        
            nombre: nombre;
            apellido: apellido;
            edad: edad;
            dni: dni;
            obraSocial: obraSocial;
            especialida:especialidad;
            email: email;
            password: password;
            perfil: perfil;
            fotoPerfilUno:fotoPerfilUno;
            fotoPerfilDos:fotoPerfilDos;
            aprobadoPorAdmin:aprobadoPorAdmin;
            baja:baja;
    }
    //Matias

    //uid: string;
    //username?: string;
    //fecha: string;
    //descripcion?:string[];
    //admin?:boolean;
    //paciente?:boolean;
    //password?:string;
    //disponibilidad?:any;
    //disponibilidadEsp?:Turnoesp[];
    //turno?: Turnos;

    //Rocio
    //public nombre: string = ''; //Obli
    //public apellido: string = '';//Obli
    //public edad: number = 0; //Obli
    //public dni: number = 0; //Obli
    //public email: string = ''; //Obli
    //public contraseña: string = ''; //Obli
    //public perfil: string | null = ''; //Obli
    //public archivo:string | null='';
    //public archivo1:string| null='';
    //public archivo2:string| null='';
}
