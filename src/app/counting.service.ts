import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountingService {

  private points = new BehaviorSubject<number>(0);

  constructor() {}

  public getPoints(): Observable<number> {
    return this.points.asObservable();
  }

  public addPoint(): void {
    this.points.next(this.points.getValue() + 1);
  }
}
