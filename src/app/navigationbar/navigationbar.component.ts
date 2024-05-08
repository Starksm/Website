import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
// import {ScrollService} from "../service/scroll.service";
import {MatToolbar} from "@angular/material/toolbar";
import {MatTabLink} from "@angular/material/tabs";

@Component({
  selector: 'app-navigationbar',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatToolbar,
    MatTabLink,
    RouterLinkActive
  ],
  templateUrl: './navigationbar.component.html',
  styleUrl: './navigationbar.component.css'
})
export class NavigationbarComponent implements OnInit {
  currentSection: string | undefined;

  constructor() {
  }

  ngOnInit() {

  }
}
