export class Usuario {

    id: number;
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    password: string;
    correo: string;
    fechaNacimiento: string;
    nivelEducacion: string;
    tipoUsuario: string

}

export interface User {
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
  }
  