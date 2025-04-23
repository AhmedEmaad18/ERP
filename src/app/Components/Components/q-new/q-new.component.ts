import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-q-new',
  standalone: false,
  templateUrl: './q-new.component.html',
  styleUrl: './q-new.component.css'
})
export class QNewComponent {
  discard: string = "Discard";
  myForm: FormGroup;
  azureOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  optionsSelect: Array<{ value: string; label: string; }> = [
    { value: '1', label: '' },
    { value: '2', label: 'Public pricelist (USD)' },
    { value: '3', label: 'End of Following Month' }
  ];
  text: string[] = ['Expiration', 'Pricelist', 'Payment Terms'];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      customerName: [''],
      description: [''],
      quantity: [0],
      unitPrice: [0],
      taxes: [0]
    });
  }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.myForm.addControl(`customerName${i}`, new FormControl(''));
      this.myForm.addControl(`azureInterior${i}`, new FormControl(''));
      this.myForm.addControl(`select${i}`, new FormControl('')); 
    }
  }
  calculateSubtotal(): number {
    const quantity = this.myForm.get('quantity')?.value || 0;
    const unitPrice = this.myForm.get('unitPrice')?.value || 0;
    const taxes = this.myForm.get('taxes')?.value || 0;

    const subtotal = quantity * unitPrice;
    const taxAmount = (subtotal * taxes) / 100;

    return subtotal + taxAmount;
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  openFiles(index: number): void {
    console.log(`Open files for row ${index}`);
  }
}
