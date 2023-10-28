

//Modelo para los registros de personas y voluntarios

export class Rpersonas{
    constructor(
        public id_persona: number,
        public nombre: string,
        public apellido: string,
        public edad:string,
        public grado_academico:string,
        public telefono:string,
        public direccion:string,
      ) {}
  }


  export class Rmedicosperros{
    constructor(
        public id_dato_medico: number,
        public nombreanimal: string,
        public agresividad: string,
        public esterilizacion:string,
        public vacuna1:string,
        public vacuna2:string,
        public otro:string,
      ) {}
  }

  export class Ranimales{
    constructor(
        public id_animal: number,
        public imagen: string,
        public nombre: string,
        public edad:string,
        public raza:string,
      ) {}
  }

  export class Ralimentacion{
    constructor(
      id_tb_sectores: number,
      sector: string,
      estado_sector: string,
      fecha: string, 
      ) {}
  }

  export class RCCanimales{
    constructor(
      idtb_registro_comida: number,
      cantidad_ingreso: number,
      fecha_ingreso: string, 

      ) {}
  }

  export class RalimentacionParaEditar{
    constructor(
      id_tb_sectores: number,
      sector: string,
      estado_sector: string,
      fecha: string, 
      ) {}
  }

  export class Rlogin{
    constructor(
        public VALOR: number,
        public correo: string,
        public contrasena: string
      ) {}
  }

  export class Rperros{
    constructor(
        public id_animal: number,
        public nombre: string,
        public edad:string,
        public raza:string,
        public imagen: string,
      ) {}
  }


