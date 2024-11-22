import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-DataGrid',
  templateUrl: './DataGrid.component.html',
  styleUrls: ['./DataGrid.component.css'],
  imports: [ButtonModule],
  standalone: true,
})
export class DataGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
