import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private currentSection = new Subject<string>();

  constructor() {
  }


  setCurrentSection(section: string) {
    this.currentSection.next(section);
  }

  getCurrentSection() {
    return this.currentSection.asObservable();
  }
}
