import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/datasource/employee.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  getData(): Observable<Employee[]> {
    const emp: Employee[] = [
      {
        id: 1,
        firstName: 'fname 1',
        lastName: 'lname 1',
        city: 'mumbai',
      },
      {
        id: 2,
        firstName: 'fname 2',
        lastName: 'lname 2',
        city: 'pune',
      },
      {
        id: 3,
        firstName: 'fname 3',
        lastName: 'lname 3',
        city: 'lucknow',
      },
      {
        id: 4,
        firstName: 'fname 4',
        lastName: 'lname 4',
        city: 'mohali',
      },
      {
        id: 5,
        firstName: 'fname 5',
        lastName: 'lname 5',
        city: 'delhi',
      },
    ];
    return of(emp);
  }
}
