import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/professional-info/education/education.component';
import { ExperienceComponent } from './components/professional-info/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { EditButtonComponent } from './components/edit-component/edit-button/edit-button.component';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from './services/portfolio-data.service';
import { EducationItemComponent } from './components/professional-info/education/education-item/education-item.component';
import { EducationEditComponent } from './components/professional-info/education/education-edit/education-edit.component';
import { AddButtonComponent } from './components/edit-component/add-button/add-button.component';
import { EducationAddItem } from './components/professional-info/education/education-add-item/education-add-item.component';
import { SkillsListComponent } from './components/skills/skills-list/skills-list.component';
import { SkillEditComponent } from './components/skills/skill-edit/skill-edit.component';
import { SkillItemComponent } from './components/skills/skill-item/skill-item.component';
import { SkillAddItemComponent } from './components/skills/skill-add-item/skill-add-item.component';
import { DeleteButtonComponent } from './components/edit-component/delete-button/delete-button.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';
import { ProjectAddComponent } from './components/projects/project-add/project-add.component';
import { NavbarEditionComponent } from './components/navbar/navbar-edition/navbar-edition.component';
import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';
import { ExperienceAddItemComponent } from './components/professional-info/experience/experience-add-item/experience-add-item.component';
import { ExperienceEditComponent } from './components/professional-info/experience/experience-edit/experience-edit.component';
import { ExperienceItemComponent } from './components/professional-info/experience/experience-item/experience-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ClipboardModule } from 'ngx-clipboard';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { spinnerInterceptorProviders } from './helpers/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleButtonComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    EditComponentComponent,
    EditButtonComponent,
    EducationItemComponent,
    EducationEditComponent,
    AddButtonComponent,
    EducationAddItem,
    SkillsListComponent,
    SkillEditComponent,
    SkillItemComponent,
    SkillAddItemComponent,
    DeleteButtonComponent,
    ProjectItemComponent,
    ProjectEditComponent,
    ProjectAddComponent,
    NavbarEditionComponent,
    NavbarItemComponent,
    ExperienceAddItemComponent,
    ExperienceEditComponent,
    ExperienceItemComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ClipboardModule],
  providers: [PortfolioDataService, authInterceptorProviders, spinnerInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}