import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../movies';
import { StarRatingComponent } from './star-rating.component';

@Component({
  selector: 'app-movie-table',
  standalone: true,
  imports: [NgFor, StarRatingComponent],
  // 01. Adding styling
  // 02. Product table looks the same, let's create a generic table
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
          <th>Movie ID</th>
          <th>Title</th>
          <th>Rating</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let movie of movies">
          <td>{{ movie.id }}</td>
          <td>{{ movie.title }}</td>
          <td>{{ movie.rating }}</td>
          <!-- 03. Now, we want a rating star component -->
          <!-- <td>
            <app-star-rating [rating]="movie.rating / 2" />
          </td> -->
          <td>{{ movie.year }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class MoviesTableComponent {
  @Input() movies: Movie[] = [];
}
