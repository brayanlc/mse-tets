import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEmptyNames',
})
export class RemoveEmptyNamesPipe implements PipeTransform {
  transform(value: string | unknown): unknown {
    return value ? value : 'Homeless *';
  }
}
