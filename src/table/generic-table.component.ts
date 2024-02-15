import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRatingComponent } from './star-rating.component';

export interface Column {
  field: string;
  header: string;
  type?: 'rating' | 'text' | 'date' | 'number';
}

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [NgFor, CommonModule, StarRatingComponent],
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
          <!-- 04. If we want to render the star, or date, or number, or what if we need to handle some event on row click? -->
          <!-- Encapsulate everything in a single table component will make it eventually a really smart component and it will be come complicated for sure -->
          <!-- So introducing ngTemplateOutlet, where you can pass a template from outside and from the inside, we can say what data the template can use -->
          <!-- <td *ngFor="let column of columns">
            <ng-container [ngSwitch]="column.type">
              <ng-container *ngSwitchCase="'rating'">
                <app-star-rating [rating]="row[column.field]"></app-star-rating>
              </ng-container>
              <ng-container *ngSwitchDefault>
                {{ row[column.field] }}
              </ng-container>
            </ng-container>
          </td> -->
        </tr>
      </tbody>
    </table>
  `,
})
export class GenericTableComponent {
  @Input() data: any[];
  @Input() columns: Column[];
}
