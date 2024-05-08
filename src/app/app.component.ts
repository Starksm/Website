import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatNavList} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {MatGridTileText} from "@angular/material/grid-list";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NavigationbarComponent} from "./navigationbar/navigationbar.component";
import {Section1Component} from "./pages/section1/section1.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatNavList, MatButton, MatGridTileText, MatTabGroup, MatTab, NavigationbarComponent, Section1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tech Crowd';
}
