import { Component } from '@angular/core';
import { ProduktComponent } from './produkt/produkt.component';
import { Produkt } from './produkt/produkt.component';  
import { KoszykComponent } from './koszyk/koszyk.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProduktComponent, KoszykComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  produkty: Produkt[] = [
    new Produkt('Monitor', 1499.99, new Date(2023, 2, 15), true),
    new Produkt('Klawiatura', 299.00, new Date(2022, 6, 5), false),
    new Produkt('Myszka', 199.99, new Date(2024, 0, 22), false),
    new Produkt('Podkładka', 99.49, new Date(2023, 10, 10), true),
    new Produkt('Słuchawki', 149.90, new Date(2023, 3, 18), false)
  ];

  wartoscKoszyka: number = 0;

  produktyWidoczne: boolean = true;

  dodajDoKoszyka(cena: number) {
    this.wartoscKoszyka += cena;
  }

  toggleProdukty() {
    this.produktyWidoczne = !this.produktyWidoczne;
  }

}
