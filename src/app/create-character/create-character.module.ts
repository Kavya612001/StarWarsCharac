import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CreateCharacterComponent } from "./create-character.component";

@NgModule({
  declarations: [CreateCharacterComponent],
  imports: [
    RouterModule.forChild([
      {path: '', component: CreateCharacterComponent}
    ]),
    FormsModule,
    CommonModule
]
})
export class CreateCharacterModule {

}
