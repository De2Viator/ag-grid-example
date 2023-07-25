import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { format } from 'date-fns';

@Component({
  selector: 'app-datetime-input',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './datetime-input.component.html',
  styleUrls: ['./datetime-input.component.scss']
})
export class DatetimeInputComponent implements AfterViewInit {
  @ViewChild('dateTimeInput', { static: true }) dateTimeInput!: ElementRef<HTMLInputElement>;
  protected readonly format = format;
  value: Date | null = null;

  agInit(params: any): void {
    this.value = params.value ? new Date(params.value) : null;
  }

  getValue(): any {
    return this.value ? this.value.toISOString() : null;
  }

  onDateInput(): void {
    this.value = new Date(this.dateTimeInput.nativeElement.value);
  }

  ngAfterViewInit(): void {
    this.dateTimeInput.nativeElement.focus();
  }
}
