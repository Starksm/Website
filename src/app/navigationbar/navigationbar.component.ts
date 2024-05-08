import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {ScrollService} from "../service/scroll.service";

@Component({
  selector: 'app-navigationbar',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './navigationbar.component.html',
  styleUrl: './navigationbar.component.css'
})
export class NavigationbarComponent implements OnInit {
  currentSection: string | undefined;

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit() {
    this.scrollService.getCurrentSection().subscribe(section => {
      this.currentSection = section;
    });
  }
}
