import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { SvgIconComponent } from "./shared/components/svg-icon/svg-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, SvgIconComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dev-tutorial';
}
