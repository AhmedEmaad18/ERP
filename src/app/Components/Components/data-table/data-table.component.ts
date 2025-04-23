import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  data = [
    {
      selected: false,
      number: 1,
      date: new Date('2023-01-15'),
      customerName: 'deco Addicat',
      salesName: 'Metchell Admin',
      nextActivity: 'Follow up call',
      companyName: 'Acme Corp',
      total: 1500,
      status: 'sales orderd'
    },
    {
      selected: false,
      number: 2,
      date: new Date('2023-02-20'),
      customerName: 'Ready mat',
      salesName: 'Metchell Admin',
      nextActivity: 'Email update',
      companyName: 'Globex Inc',
      total: 2500,
      status: 'sales orderd'
    },
    {
      selected: false,
      number: 3,
      date: new Date('2023-03-10'),
      customerName: 'deco Addicat',
      salesName: 'Metchell Admin',
      nextActivity: 'Schedule meeting',
      companyName: 'Initech',
      total: 3000,
      status: 'sales orderd'
    },
    {
      selected: false,
      number: 4,
      date: new Date('2023-04-05'),
      customerName: 'Emily Davis',
      salesName: 'Metchell Admin',
      nextActivity: 'Send proposal',
      companyName: 'Wayne Enterprises',
      total: 1800,
      status: 'sales orderd'
    },
  ];
}
