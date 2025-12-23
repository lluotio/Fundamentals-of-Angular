import { Routes } from '@angular/router';
import { AboutMe } from './about-me/about-me';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';

export const routes: Routes = [
    {path: '', component: AboutMe},
    {path: 'experience', component: Experience},
    {path: 'skills', component: Skills}
];
