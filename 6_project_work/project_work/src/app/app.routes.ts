import { Routes } from '@angular/router';
import { Calculator } from './calculator/calculator';
import { Home } from './home/home';
import { TextEditor } from './text-editor/text-editor';
import { Weather } from './weather/weather';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'calculator', component: Calculator},
    { path: 'texteditor', component: TextEditor},
    { path: 'weather', component: Weather}
]

export class AppRoutingModule {}