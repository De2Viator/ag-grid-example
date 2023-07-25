import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {AppService} from "./app.service";
import {DatetimeInputComponent} from "./components/datetime-input/datetime-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly appService: AppService) {
  }
  rowData: any[] = this.appService.data;
  colDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      editable: true,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Price',
      field: 'price',
      editable: true,
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Full Price',
      field: 'fullPrice',
      editable: true,
      filter: 'agNumberColumnFilter',
      valueFormatter: params => this.appService.formatDecimal(params.value),
    },
    {
      headerName: 'Delivery date',
      field: 'deliveryDate',
      editable: true,
      filter: 'agDateColumnFilter',
      valueFormatter: params => this.appService.formatDate(params.value, false),
    },
    {
      headerName: 'Full delivery date',
      field: 'fullDeliveryDate',
      editable: true,
      filter: 'agDateColumnFilter',
      cellEditor: DatetimeInputComponent,
      valueFormatter: params => this.appService.formatDate(params.value),
    },
    {
      headerName: 'Status',
      field: 'status',
      editable: true,
      filter: 'agSetColumnFilter',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Pending', 'Completed', 'Canceled'],
      },
      valueFormatter: (params: any) => this.appService.formatDropdown(params.value, this.colDefs[5]),
    }
  ];

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }

}
