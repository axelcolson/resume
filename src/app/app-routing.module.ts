import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'profile', component: ProfileComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'skills', component: SkillsComponent},
  {path:'education', component: EducationComponent},
  {path:'languages', component: LanguagesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
