import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propertryName: string): any[] {
    const result: any = [];
    if(!value || filterString === '' || propertryName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if(a[propertryName].trim().toLowerCase().includes(filterString.toLocaleLowerCase())) {
        result.push(a);
      }
    });
    return result;
  }

}
