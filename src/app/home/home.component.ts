import { Component } from '@angular/core';
import { FormFieldComponent } from "../shared/components/form-field/form-field.component";
import { FormsModule } from "@angular/forms";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormFieldComponent,
    FormsModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly baseUrl: string = 'https://angular.dev/assets/iamges/tutorials/common';
  readonly searchInput: { name: string; placeholder: string; type: string } = {
    name: 'search',
    placeholder: 'Search for something...',
    type: 'text'
  };
  housingLocation: HousingLocation = {
    id: 1,
    name: 'Dhaka',
    city: 'Dhaka City',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 12,
    wifi: true,
    laundry: false,
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
