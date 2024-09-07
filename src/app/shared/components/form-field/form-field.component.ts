import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input({required: true}) prop!: { name: string, placeholder: string, type: string };
  @Output() valueChange = new EventEmitter<string>();
  value: string = '';


  onChangeInput($event: string) {
    this.value = $event;
    this.valueChange.emit(this.value);
  }
}
