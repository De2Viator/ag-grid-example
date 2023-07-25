import { Injectable } from '@angular/core';
import {ColDef} from "ag-grid-community";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data = [ {
    name: 'Product A',
    price: 10,
    fullPrice: 123.45,
    fullDeliveryDate: '2023-07-25T12:34:56',
    deliveryDate: '2023-07-25',
    status: 'Completed',
  }, {
      name: 'Product B',
      price: 5,
      fullPrice: 678.9,
      fullDeliveryDate: '2023-07-26T08:15:00',
      deliveryDate: '2023-07-26',
      status: 'Pending',
  }]
  formatDecimal(value: number): string {
    return value ? value.toFixed(2) : '';
  }

  formatDate(value: any, includeTime = true): string {
    if (!value) return '';
    const date = new Date(value);
    return includeTime ? date.toLocaleString() : date.toDateString();
  }

  formatDropdown(value: string, column: ColDef): string {
    if (!value) return '';
    const option = column.cellEditorParams.values.find((opt: any) => opt.toLowerCase() === value.toLowerCase());
    return option ? option : '';
  }
}
