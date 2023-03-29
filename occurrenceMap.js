import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>{{occurrenceMap}}</p>'
})
export class ExampleComponent {
  arr1: number[] = [2,5,7,2,1,5,2,1,5,1,4,8,1,3,1];
  occurrenceMap: { [key: number]: number } = {};

  constructor() {
    this.occurrenceMap = this.getOccurrenceMap(this.arr1);
  }

  private getOccurrenceMap(arr: number[]): { [key: number]: number } {
    return arr.reduce((acc, val) => {
      acc[val] = acc[val] ? acc[val] + 1 : 1;
      return acc;
    }, {});
  }
}

// In plain JS, same function :
/* let arr1 = [2,5,7,2,1,5,2,1,5,1,4,8,1,3,1,];
const occu = arr1.reduce((a, val) => {
    a[val] = a[val]  ? a[val] +1 : 1;
    return a;
}, {});

console.log(arr1);
console.log(occu);
 */
