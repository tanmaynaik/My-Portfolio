import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from '../../../Component_Form/src/app/components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },        // your hero/home page component
  { path: 'skills', component: SkillsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
