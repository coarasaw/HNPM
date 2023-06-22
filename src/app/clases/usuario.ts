export class Usuario {

    nombre: string;
    apellido: string;
    edad: string;
    dni: string;
    obraSocial?: string;
    especialidad?:string;
    otraEspecialidad?:string;
    email?: string;
    password?: string;
    perfil?: string;
    fotoPerfilUno?:string;
    fotoPerfilDos?:string;
    aprobadoPorAdmin?:string;
    baja?:string;
    altura?:string;
    peso?:string;
    temperatura?:string;
    presion?:string;
    clave1?:string;
    valor1?:string;
    clave2?:string;
    valor2?:string;
    clave3?:string;
    valor3?:string;

    constructor(nombre: string,
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
                aprobadoPorAdmin?:string,
                baja?:string,
                altura?:string,
                peso?:string,
                temperatura?:string,
                presion?:string,
                clave1?:string,
                valor1?:string,
                clave2?:string,
                valor2?:string,
                clave3?:string,
                valor3?:string){

            this.nombre= nombre;
            this.apellido= apellido;
            this.edad= edad;
            this.dni= dni;
            this.obraSocial= obraSocial;
            this.especialidad=especialidad;
            this.otraEspecialidad=otraEespecialidad;
            this.email= email;
            this.password= password;
            this.perfil= perfil;
            this.fotoPerfilUno=fotoPerfilUno;
            this.fotoPerfilDos=fotoPerfilDos;
            this.aprobadoPorAdmin=aprobadoPorAdmin;
            this.baja=baja;
            this.altura=altura;
            this.peso=peso;
            this.temperatura=temperatura;
            this.presion=presion;
            this.clave1=clave1;
            this.valor1=valor1;
            this.clave2=clave2;
            this.valor2=valor2;
            this.clave3=clave3;
            this.valor3=valor3;
    }
    //

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
