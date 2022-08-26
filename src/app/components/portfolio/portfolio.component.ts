import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { Habilidad } from 'src/app/model/Habilidad';
import { Persona } from 'src/app/model/Persona';
import { Proyecto } from 'src/app/model/Proyecto';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  datosPersona?: Persona;
  datosSecciones?: Seccion[];
  educacionData?: Educacion[];
  experienciaData?: Experiencia[];
  habilidadesData?: Habilidad[];
  proyectosData?: Proyecto[];
  baseUrl: string = environment.baseUrl;
  personaID: number = 1;

  mostrar: boolean = false;

  constructor(
    private portfolioData: PortfolioDataService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  reloadPersona() {
    this.portfolioData
      .getData(`${this.baseUrl}/personas/${this.datosPersona?.id}`)
      .subscribe((data) => {
        this.datosPersona = data;
        this.titleService.setTitle(this.datosPersona!.nombre);
      });
  }

  getData() {
    // Obtenemos los datos de Persona para el Nav, Hero y About.
    this.portfolioData
      .getData(`${this.baseUrl}/personas/${this.personaID}`)
      .subscribe((data) => {
        this.datosPersona = data;
        this.titleService.setTitle(this.datosPersona!.nombre);
      });

    this.portfolioData
      .getData(`${this.baseUrl}/secciones/listar`)
      .subscribe((data) => {
        this.datosSecciones = data.filter(
          (el: Seccion) => el.persona_id == this.personaID
        );
      });

    this.portfolioData
      .getData(`${this.baseUrl}/educacion/listar`)
      .subscribe((data) => {
        this.educacionData = data.filter(
          (el: Educacion) => el.persona_id == this.personaID
        );
      });

    this.portfolioData
      .getData(`${this.baseUrl}/experiencia/listar`)
      .subscribe((data) => {
        this.experienciaData = data.filter(
          (el: Experiencia) => el.persona_id == this.personaID
        );
      });

    this.portfolioData
      .getData(`${this.baseUrl}/habilidades/listar`)
      .subscribe((data) => {
        this.habilidadesData = data.filter(
          (el: Habilidad) => el.persona_id == this.personaID
        );
        this.mostrar = true;
      });

    this.portfolioData
      .getData(`${this.baseUrl}/proyectos/listar`)
      .subscribe((data) => {
        this.proyectosData = data.filter(
          (el: Proyecto) => el.persona_id == this.personaID
        );
      });
  }

  ngOnInit() {
    if (this.tokenStorage.getUser().id != null || undefined) {
      this.personaID = this.tokenStorage.updateID();
      this.router.navigate(['/portfolio', this.personaID]);
    } else {
      this.route.params.subscribe((params) => {
        if (params['id']) {
          this.personaID = +params['id'];
          this.router.navigate(['/portfolio', this.personaID]);
        } else {
          this.router.navigate(['/portfolio', 1]);
        }
      });
    }
    this.getData();
    this.portfolioData.getRefresh().subscribe((value: boolean) => {
      if (value) {
        this.reloadPersona();
      }
    });
  }
}