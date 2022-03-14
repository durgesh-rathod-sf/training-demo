import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/datasource/employee.model';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly httpService: HttpService) {}
  displayColumns: string[] = ['id', 'firstName', 'lastName', 'city'];
  dataSource: Employee[] = [];
  ngOnInit(): void {
    
    this.httpService.getData().subscribe((response: Employee[]) => {
      this.dataSource = response;
    });
  }
}
