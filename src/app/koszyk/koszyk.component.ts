import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {

  @Input() wartoscKoszyka: number = 0; 
}
