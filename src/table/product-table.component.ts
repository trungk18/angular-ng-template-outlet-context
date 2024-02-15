import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [NgFor],
  // styles: [
  //   `table {
  //     border-collapse: collapse;
  //     width: 100%;
  //   }

  //   th,
  //   td {
  //     text-align: left;
  //     padding: 8px;
  //   }

  //   th {
  //     background-color: #4caf50;
  //     color: white;
  //   }

  //   tr:nth-child(even) {
  //     background-color: #f2f2f2;
  //   }

  //   tr:hover {
  //     background-color: #ddd;
  //   }`,
  // ],
  template: `
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Name</th>
          <th>From</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.madeIn }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class ProductTableComponent {
  @Input() products: Product[] = [];
}
