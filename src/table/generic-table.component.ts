import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [NgFor],
  styles: [
    `table {
      border-collapse: collapse;
      width: 100%;
    }
    
    th,
    td {
      text-align: left;
      padding: 8px;
    }
    
    th {
      background-color: #4caf50;
      color: white;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    
    tr:hover {
      background-color: #ddd;
    }`,
  ],
  template: `
    <table> 
      <thead>
        <tr>
          <th *ngFor="let column of columns">{{ column.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <td *ngFor="let column of columns">{{ row[column.field] }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class GenericTableComponent {
  @Input() data: any[];
  @Input() columns: Column[];
}
