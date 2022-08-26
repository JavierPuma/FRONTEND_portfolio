export class Experiencia {
    id?: number;
    persona_id: number;
    puesto: string;
    empleador: string;
    fecha: string;
    descripcion: string;
    
    constructor(persona_id: number, puesto: string, empleador: string, fecha: string, descripcion: string){
        this.persona_id = persona_id;
        this.puesto = puesto;
        this.empleador = empleador;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}