import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styles: `
  #pie {
    background-color: #FFA447;
  }
  `
})
export class PieComponent {

  private Autor = 'Kevin'

  getAutor() {
    return this.Autor
  }
}