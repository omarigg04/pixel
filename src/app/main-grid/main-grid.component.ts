import { Component } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent {
  size = 360;

  generarArray(): any[] {
    return new Array(this.size);
  }

}
