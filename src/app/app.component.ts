import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataGridComponent } from './shared/components/DataGrid/DataGrid.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DataGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EG_ERP.V2';
}
