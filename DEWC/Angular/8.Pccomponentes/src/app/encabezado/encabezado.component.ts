import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styles: `
  #logo,#titulo {
    background-color: rgb(240, 240, 240);
  }
  #titulo>h1 {
      font-size: 72px;
      color: #FFA447;
  }
  `
})
export class EncabezadoComponent {

}
