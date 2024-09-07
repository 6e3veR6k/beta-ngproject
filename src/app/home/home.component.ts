import { Component } from '@angular/core';
import { FormFieldComponent } from "../shared/components/form-field/form-field.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormFieldComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchInput: { name: string; placeholder: string; type: string } = {
    name: 'search',
    placeholder: 'Search for something...',
    type: 'text'
  };

}
