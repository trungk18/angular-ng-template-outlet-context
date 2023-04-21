import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

export interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-generic-table-outlet',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
  styleUrls: ['./generic-table-template-outlet.component.scss'],
  template: `
    <table> 
      <thead>
        <tr>
          <ng-container [ngTemplateOutlet]="header"></ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let rowData of data">
          <ng-container 
            [ngTemplateOutlet]="row" 
            [ngTemplateOutletContext]="{ row: rowData }">
          </ng-container>
        </tr>
      </tbody>
    </table>
  `,
})
export class GenericTableWithTemplateOutletComponent {
  @Input() data: any[];
  @ContentChild('row') row: TemplateRef<any>;
  @ContentChild('header') header: TemplateRef<any>;
}
