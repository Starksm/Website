import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {NavigationEnd, Router} from "@angular/router";



@Component({
  selector: 'app-section1',
  standalone: true,
    imports: [
        MatCard
    ],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})


export class Section1Component implements OnInit{
  ngOnInit() {
  }
}