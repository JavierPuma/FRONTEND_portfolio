export class Seccion {
    id: number;
    persona_id: number;
    titulo: string;
    descripcion: string;

    constructor(id: number, persona_id: number, titulo: string, descripcion: string){
        this.id = id;
        this.persona_id = persona_id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}