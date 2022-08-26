import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience-add-item',
  templateUrl: './experience-add-item.component.html',
  styleUrls: ['./experience-add-item.component.css'],
})
export class ExperienceAddItemComponent  {
  @Input() isAdding: boolean = false;
  @Input() experienciaList?: Experiencia[];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  experienciaItem?: Experiencia
  baseUrl: string = environment.baseUrl;
  personaID: number = 1;

  constructor(private portfolioData: PortfolioDataService, private tokenStorage: TokenStorageService){}
  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.experienciaList?.push(this.experienciaItem!);
    const url = `${this.baseUrl}/experiencia/agregar`
    this.portfolioData.createData(url, this.experienciaItem).subscribe();
    this.onAddItem.emit();
  }

  ngOnInit() {
    this.personaID = this.tokenStorage.updateID();
    this.experienciaItem = new Experiencia(this.personaID, "", "", "", "");
  }
}
