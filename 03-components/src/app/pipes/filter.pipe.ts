import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(myArray: any,
            text: string,
            column: string): any[] {
    console.log(text);
    console.log(myArray);

    if (text === '') {
      return myArray;
    }

    return myArray.filter(item => {
        return item[column].toLowerCase()
          .includes(text.toLowerCase());
      });
  }

}
