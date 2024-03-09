import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
})
export class MainGridComponent implements OnInit {
  gridSize: number = 5;
  gridState: number[][] = [];
  numberDisplay: number = 0;

  ngOnInit(): void {
    // Inicializar el arreglo con valores predeterminados (en este caso, todas las celdas apagadas)
    for (let i = 0; i < this.gridSize; i++) {
      this.gridState[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.gridState[i][j] = 0;
      }
    }

    for (let i = 0; i < this.gridSize; i++) {
      this.rotabitFunction(i,500)
      
    }





  }

  // Método para encender una celda en la posición (row, col)
  turnOn(row: number, col: number){
    this.gridState[row][col] = 1;
  }

  // Método para apagar una celda en la posición (row, col)
  turnOff(row: number, col: number){
    this.gridState[row][col] = 0;
  }


  rotabitFunction(column: any, velocity: any): void{
    let currentCell = 0;
    let direction = 1; // 1 para incrementar, -1 para decrementar
    const intervalId = setInterval(() => {
      this.numberDisplay++;
      // Encender la celda actual y apagar la celda anterior o siguiente, dependiendo de la dirección
      this.turnOn(column, currentCell); // Enciende la celda actual en cualquier dirección
      if (direction == 1) {
          if (currentCell > 0) {
              this.turnOff(column, currentCell - 1); // Apaga la celda anterior si no estamos en la primera celda
          }
          currentCell++;
          if (currentCell == this.gridSize) { // Si alcanza el límite superior, cambia la dirección y retrocede
              direction = 0;
              currentCell -= 2;
          }
      } else if (direction == 0) {
          if (currentCell < this.gridSize - 1) {
              this.turnOff(column, currentCell + 1); // Apaga la celda siguiente si no estamos en la última celda
          }
          currentCell--;
          if (currentCell < 0) { // Si alcanza el límite inferior, cambia la dirección y avanza
              direction = 1;
              currentCell += 2;
          }
      }
  
      console.log(currentCell, '  ', direction);
  }, velocity);
  }


}
