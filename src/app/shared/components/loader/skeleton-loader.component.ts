import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SkeletonLoaderComponent {
  statsCardsSkeleton = [1, 2, 3, 4];
  topCustomerSkeleton = [1, 2, 3, 4, 5];
  topDishesSkeleton = [1, 2, 3, 4, 5];
}
