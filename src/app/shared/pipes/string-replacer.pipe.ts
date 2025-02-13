import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class StringReplacerPipe implements PipeTransform {

  transform(string: string | null, replace: string = ',', by: string = '.'): string | null {
    return (string) ? string.replaceAll(replace, by) : null;
  }

}
