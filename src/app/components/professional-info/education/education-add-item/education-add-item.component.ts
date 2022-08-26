import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education-add-item',
  templateUrl: './education-add-item.component.html',
  styleUrls: ['./education-add-item.component.css'],
})
export class EducationAddItem  {
  @Input() isAdding: boolean = false;
  @Input() educacionList?: Educacion[];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  educacionItem?: Educacion;
  baseUrl: string = environment.baseUrl;
  personaID: number = 1;

  constructor(private portfolioData: PortfolioDataService, private tokenStorage: TokenStorageService){}
  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.educacionList?.push(this.educacionItem!);
    const url = `${this.baseUrl}/educacion/agregar`
    this.portfolioData.createData(url, this.educacionItem).subscribe();
    this.onAddItem.emit();
  }

  ngOnInit() {
    this.personaID = this.tokenStorage.updateID();
    this.educacionItem = new Educacion(this.personaID,"", "", "", "" );
  }
}
