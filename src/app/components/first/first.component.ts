import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirstService } from './first.service';
import { repeat, Subject, takeUntil } from 'rxjs';
interface deadlineData {
  secondsLeft: Number;
}

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})

export class FirstComponent implements OnInit, OnDestroy {
  public count: Number = 0;
  private destroySubscription$: Subject<void> = new Subject();
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    this.showDeadline();
  }

  ngOnDestroy(): void {
    this.destroySubscription$.next();
    this.destroySubscription$.complete();
  }

  showDeadline(): void {
    this.firstService
      .getDeadline()
      .pipe(repeat({ delay: 1000 }), takeUntil(this.destroySubscription$))
      .subscribe((result: deadlineData) => {
        this.count = result.secondsLeft;
      });
  }
}
