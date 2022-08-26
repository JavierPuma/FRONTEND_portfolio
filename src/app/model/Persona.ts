export class Persona {
    id: number;
    nombre: string;
    titulo: string;
    email: string;
    linkedin_url: string;
    github_url: string;
    img_url: string;
    banner_url: string;
    about_url: string;
    
    constructor(id: number, nombre: string, titulo: string, email: string, linkedin_url: string, github_url: string, img_url: string, banner_url: string, about_url: string){
        this.id = id;
        this.nombre = nombre;
        this.titulo = titulo;
        this.email = email;
        this.linkedin_url = linkedin_url;
        this.github_url = github_url;
        this.img_url = img_url;
        this.banner_url = banner_url;
        this.about_url = about_url;
    }
    }