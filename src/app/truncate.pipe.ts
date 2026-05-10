import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, maxLength: number): string {
    if (value == null) {
      return '';
    }

    const length = Number(maxLength) || 0;
    if (length <= 0 || value.length <= length) {
      return value;
    }

    return value.slice(0, length) + '...';
  }
}
