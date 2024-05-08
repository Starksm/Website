import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-section2',
  standalone: true,
    imports: [
        MatCard
    ],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component implements OnInit{


  ngOnInit() {

  }
}