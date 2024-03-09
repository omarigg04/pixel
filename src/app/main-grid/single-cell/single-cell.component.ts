import { Component } from '@angular/core';

@Component({
  selector: 'app-single-cell',
  templateUrl: './single-cell.component.html',
  styleUrls: ['./single-cell.component.scss']
})
export class SingleCellComponent {

  isMouseOver: boolean = false;
  color: string = 'white';

  onMouseEnter(): void {
    this.isMouseOver = true;
    this.color = 'blue'; // Cambiar el color al pasar el mouse
  }

  onMouseLeave(): void {
    this.isMouseOver = false;
    this.color = 'white'; // Restaurar el color al salir el mouse
  }


}
