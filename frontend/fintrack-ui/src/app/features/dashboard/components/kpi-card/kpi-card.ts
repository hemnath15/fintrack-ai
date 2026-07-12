import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kpi-card',
  imports: [MatIconModule,MatCardModule,CommonModule,


  ],
  standalone:true,
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCard {
    title = input.required<string>();

  value = input.required<string>();

  icon = input.required<string>();

  trend = input.required<string>();

  positive = input<boolean>(true);
}
