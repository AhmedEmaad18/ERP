import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-pagination',
  standalone: false,
  templateUrl:'./search-pagination.component.html',
  styleUrl: './search-pagination.component.css'
})
export class SearchPaginationComponent {
  dataSource = new MatTableDataSource();

}
