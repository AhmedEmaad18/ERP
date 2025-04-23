import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  standalone: false,
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  cards = [
    { title: 'المواقع', location: 'SanFrancisco', count: 4, status: 'بانتظار المعالجه' },
    { title: 'اوامر التوصيل', location: 'SanFrancisco', count: 16, status: 'بانتظار المعالجه' },
    { title: 'Returns', location: 'SanFrancisco', count: 0, status: 'بانتظار المعالجه' },
    { title: 'Manufactoring', location: 'SanFrancisco', count: 5, status: 'للمعالجه' },
    { title: 'Resupply subcontractor', location: 'SanFrancisco', count: 0, status: 'بانتظار المعالجه' },
    { title: 'PosOrder', location: 'SanFrancisco', count: 0, status: 'بانتظار المعالجه' },
    { title: 'الايصالات', location: 'مخزن القاهره', count: 0, status: 'بانتظار المعالجه' },
    { title: 'اوامر التوصيل', location: 'مخزن القاهره', count: 0, status: 'بانتظار المعالجه' },
    { title: 'طلبات نقطه البيع', location: 'مخزن القاهره', count: 0, status: 'بانتظار المعالجه' },
    { title: 'البضاعه المرجعه', location: 'مخزن القاهره', count: 0, status: 'بانتظار المعالجه' },
    { title: 'اعاده تزويد المتعاقد من الباطن', location: 'مخزن القاهره', count: 0, status: 'بانتظار المعالجه' },
    { title: 'التصنيع', location: 'مخزن القاهره', count: 0, status: ' للمعالجة' }
  ];
}
