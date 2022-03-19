import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IntroComponentRoutes } from "./intro-routing.module";
import { IntroComponent } from "./intro.component";

@NgModule({
    declarations: [
      IntroComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(IntroComponentRoutes)
    ]
  })
  export class IntroModule { }