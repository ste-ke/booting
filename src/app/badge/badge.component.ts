import { Component, OnInit } from '@angular/core';
import {CountingService} from 'src/app/counting.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.sass']
})
export class BadgeComponent implements OnInit {

  public points = 0;

  constructor(private countingService: CountingService) { }

  getPoints(): void {
    this.countingService.getPoints().subscribe(points => this.points = points);
  }

  ngOnInit(): void {
    this.getPoints();
  }

}
