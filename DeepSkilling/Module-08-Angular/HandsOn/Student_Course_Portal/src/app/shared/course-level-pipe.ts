import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseLevel'
})
export class CourseLevelPipe implements PipeTransform {

  transform(level: string): string {

    if (level === 'Beginner') {
      return 'Beginner Level';
    }

    if (level === 'Intermediate') {
      return 'Intermediate Level';
    }

    if (level === 'Advanced') {
      return 'Advanced Level';
    }

    return level;
  }

}