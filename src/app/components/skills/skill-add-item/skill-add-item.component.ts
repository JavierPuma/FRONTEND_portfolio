import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Habilidad } from 'src/app/model/Habilidad';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-add-item',
  templateUrl: './skill-add-item.component.html',
  styleUrls: ['./skill-add-item.component.css'],
})
export class SkillAddItemComponent {
  @Input() isAdding: boolean = false;
  @Input() habilidadesList?: Habilidad[];
  @Input() habilidadTipo: string = '';
  personaID: number = 1;
  habilidadItem?: Habilidad;
  baseUrl: string = environment.baseUrl;

  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();

  constructor(private portfolioData: PortfolioDataService, private tokenStorage: TokenStorageService){}
  toggleAdding(): void {
    this.onToggleAdding.emit();
  }

  addItem() {
    this.habilidadesList?.push(this.habilidadItem!);
    const url = `${this.baseUrl}/habilidades/agregar`
    this.portfolioData.createData(url, this.habilidadItem).subscribe();
    this.onAddItem.emit();
  }

  ngOnInit() {
    this.personaID = this.tokenStorage.updateID();
    this. habilidadItem = new Habilidad(this.personaID,'',this.habilidadTipo,'',50,'fa-brands fa-html5');
  }
}