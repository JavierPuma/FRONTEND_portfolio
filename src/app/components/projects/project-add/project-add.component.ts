import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent {
  @Input() isAdding: boolean = false;
  @Input() proyectosList: Proyecto[] = [];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  baseUrl: string = environment.baseUrl;
  personaID: number = 1;
  proyectoItem?: Proyecto;


  constructor(private portfolioData: PortfolioDataService, private tokenStorage: TokenStorageService){}

  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.proyectosList?.push(this.proyectoItem!);
    const url = `${this.baseUrl}/proyectos/agregar`
    this.portfolioData.createData(url, this.proyectoItem).subscribe();
    this.onAddItem.emit();
  }

  ngOnInit() {
    this.personaID = this.tokenStorage.updateID();
    this.proyectoItem = new Proyecto(this.personaID, '', '', 'https://cabaretfestival.es/wp-content/uploads/2020/07/Hero-Banner-Placeholder-Light-1024x480-1.png', '', '');
  }
}