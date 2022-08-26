export class Proyecto {
    id?: number;
    persona_id: number;
    titulo: string;
    descripcion: string;
    img_url: string;
    repo_url: string;
    demo_url: string;
  
    constructor(
      persona_id: number,
      titulo: string,
      descripcion: string,
      img_url: string,
      repo_url: string,
      demo_url: string
    ) {
      this.persona_id = persona_id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.img_url = img_url;
      this.repo_url = repo_url;
      this.demo_url = demo_url;
    }
  }