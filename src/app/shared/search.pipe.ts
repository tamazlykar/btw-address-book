import { Pipe, PipeTransform } from '@angular/core';
import { ContactSearchKeys } from '../contact';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(value: any[], text: string): any {
        if (value == null || text === undefined) {
            return value;
        }

        return value.filter( item => {
            let isFound = false;
            ContactSearchKeys.forEach(key => {
                if (item[key] !== undefined) {
                    if (item[key].toUpperCase().indexOf(text.toUpperCase()) !== -1) {
                    isFound = true;
                };
                }
            });
            return isFound;
        });
    }
}
