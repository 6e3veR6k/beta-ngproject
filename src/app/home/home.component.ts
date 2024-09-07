import { Component } from '@angular/core';
import { FormFieldComponent } from "../shared/components/form-field/form-field.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormFieldComponent,
    FormsModule
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


  onSearch($event: string) {
    console.log($event);
  }


  onSearchBtn() {
    // console.log('Search button is clicked');
  }


  onFormSubmit($event: any) {
    console.log('Form is submitted');
    console.log($event);
  }
}
