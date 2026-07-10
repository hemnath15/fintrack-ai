import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-ai-insights',
  imports: [ CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './ai-insights.html',
  styleUrl: './ai-insights.css',
})
export class AiInsights {}
