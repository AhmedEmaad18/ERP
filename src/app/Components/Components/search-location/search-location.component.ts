import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-location',
  standalone: false,
  templateUrl: './search-location.component.html',
  styleUrl: './search-location.component.css'
})
export class SearchLocationComponent {
  dataSource = new MatTableDataSource();

}
