import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Produkt {
  constructor(
    public nazwa: string,
    public cena: number,
    public dataUtworzenia: Date,
    public czyPromocja: boolean
  ) {}
}

@Component({
  selector: 'app-produkt',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent {
  @Input() produkt!: Produkt; 
  @Output() dodajDoKoszyka = new EventEmitter<number>();

  onDodajDoKoszyka() {
    this.dodajDoKoszyka.emit(this.produkt.cena);
  }
}
