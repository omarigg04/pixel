import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
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

    

    // for (let cell = 0; cell < 20; cell++) {
    //   // Utilizar una función flecha para evitar problemas con 'this'
    //   setTimeout(((currentCell) => {
    //     return () => {
    //       // this.turnOn(0, currentCell);
    //       this.numberDisplay ++
    //     };
    //   })(cell), 500 * cell);
    //   for (let cellC = 0; cellC < 20; cellC++) {
    //     // Utilizar una función flecha para evitar problemas con 'this'
    //     setTimeout(((currentCell) => {
    //       return () => {
    //         this.turnOn(currentCell,cellC);
    //         this.turnOff(currentCell-1,cellC);

    //         // this.numberDisplay ++
    //       };
    //     })(cell), 100 * cell);
    //   }
    // }

    // let cell = 0;
    // const intervalId = setInterval(() => {      
    //   this.turnOn(1, cell);
    //   cell++;
    //   if (cell === 20) {
    //     clearInterval(intervalId); // Detiene el intervalo cuando se encienden todas las celdas
    //   }
    // }, 500);

let currentCell = 0;
let direction = 1; // 1 para incrementar, -1 para decrementar

const intervalId = setInterval(() => {
  // Encender la celda actual y apagar la anterior
  this.turnOn(0, currentCell);
  if (currentCell - direction >= 0) {
    this.turnOff(0, currentCell - direction);
  }
  this.numberDisplay++;

  // Mover a la siguiente celda
  currentCell += direction;
  console.log(currentCell, '  ', direction);
  

  // Cambiar la dirección si llegamos al límite
  if (currentCell === this.gridSize - 1 || currentCell === 0) {
    direction *= -1;
  }
}, 1000);


  
  }



  // Método para encender una celda en la posición (row, col)
  turnOn(row: number, col: number): void {
    this.gridState[row][col] = 1;
  }

  // Método para apagar una celda en la posición (row, col)
  turnOff(row: number, col: number): void {
    this.gridState[row][col] = 0;
  }

  

}
