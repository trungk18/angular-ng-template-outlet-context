import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { DeclarativeNgTemplateComponent } from './ng-template/declarative-ng-template.component';
import { ProductTableComponent } from './table/product-table.component';
import { PRODUCTS } from './products';
import { MOVIES } from './movies';
import { MoviesTableComponent } from './table/movie-table.component';
import { Column, GenericTableComponent } from './table/generic-table.component';
import { GenericTableWithTemplateOutletComponent } from './table/generic-table-template-outlet.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    NgTemplateComponent,
    DeclarativeNgTemplateComponent,
    ProductTableComponent,
    MoviesTableComponent,
    GenericTableComponent,
    GenericTableWithTemplateOutletComponent,
  ],
  template: `
    <h1>The Power of ngTemplateOutlet</h1>
    <h2>1. ng-template </h2>
    <app-ng-template />
    <app-declarative-ng-template />
    <h2>2. Custom table </h2>    

    <h3 class="mt-4">2.1 Movie table component </h3>
    <app-movie-table [movies]="MOVIES" />
    <!-- 02. Generic table -->
    <!-- <app-generic-table [data]="MOVIES" [columns]="movieColumns" /> -->
    
    <!-- 05. Generic table outlet -->
    <!-- <app-generic-table-outlet [data]="MOVIES">
      <ng-template #header>
        <th>Movie ID</th>
        <th>Title</th>
        <th>Rating</th>
        <th>Year</th>
      </ng-template>
      <ng-template #row let-row="row">
        <td>{{ row.id }}</td>
        <td>{{ row.title }}</td>
        <td>{{ row.rating }}</td>
        <td>{{ row.year }}</td>
      </ng-template>
    </app-generic-table-outlet> -->
    <hr />

    <h3>2.2 Product table component </h3>
    <app-product-table [products]="PRODUCTS" />
    <hr />
  `,
})
export class App {
  MOVIES = MOVIES;
  PRODUCTS = PRODUCTS;

  movieColumns: Column[] = [
    { field: 'id', header: 'Movie ID' },
    { field: 'title', header: 'Title' },
    { field: 'rating', header: 'Rating ' },
    { field: 'year', header: 'Year' },
  ];

  productColumns: Column[] = [
    { field: 'id', header: 'Product ID' },
    { field: 'name', header: 'Name' },
    { field: 'madeIn', header: 'From ' },
    { field: 'price', header: 'Price' },
  ];
}

bootstrapApplication(App);
