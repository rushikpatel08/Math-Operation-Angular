import { Component } from '@angular/core';
import { OperationServiceService } from './operation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num1: number = 0;
  num2: number = 0;
  ans: number | null = null;

  constructor(private operationService: OperationServiceService) { }

  performOperation(operation: string) {
    switch (operation) {
      case 'sum':
        this.operationService.getSum(this.num1, this.num2).subscribe(result => {
          this.ans = result;
        });
        break;
      case 'sub':
        this.operationService.getSub(this.num1, this.num2).subscribe(result => {
          this.ans = result;
        });
        break;
        case 'mul':
          this.operationService.getMul(this.num1, this.num2).subscribe(result => {
            this.ans = result;
          });
          break;
        case 'div':
          this.operationService.getDiv(this.num1, this.num2).subscribe(result => {
            this.ans = result;
          });
          break;
    }
  }
}
