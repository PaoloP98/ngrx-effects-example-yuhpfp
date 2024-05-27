import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRoot } from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error$: Observable<string>;
  data$: Observable<string>;
  JSON = JSON;

  constructor(private store: Store<{ rootState: fromRoot.RootState }>) {
    this.error$ = this.store.select(fromRoot.getStateError);
    this.data$ = this.store.select(fromRoot.getStateSelectedData);
  }

  getApiData() {
    this.store.dispatch(fromRoot.ApiGetMockData({id: 'randomId'}));
  }

  getError() {
    this.store.dispatch(fromRoot.ApiGetMockDataWithError({id: 'randomId'}));
  }

}
