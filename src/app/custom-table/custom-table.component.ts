import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit,OnChanges,OnDestroy {
  @Input()
  dataSource: any;

  @Input()
  displayColumns: string[] = [];

  constructor(private readonly httpService: HttpService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
      
  }
  ngOnDestroy(): void {
    
  }
}
