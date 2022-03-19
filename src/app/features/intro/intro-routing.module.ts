import { Routes } from "@angular/router";
import { IntroComponent } from "./intro.component";

export const IntroComponentRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IntroComponent
    }
];
