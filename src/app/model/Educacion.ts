export class Educacion {
    id?: number;
    persona_id: number;
    titulo: string;
    institucion: string;
    fecha: string;
    descripcion: string;
    
    constructor(persona_id: number, titulo: string, institucion: string, fecha: string, descripcion: string){
        this.persona_id = persona_id;
        this.titulo = titulo;
        this.institucion = institucion;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}