import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MockApiService } from '../services/mockapi.service';
import { ApiGetMockData, ApiGetMockDataWithError, ApiError, ApiSuccess } from './actions';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RootEffects {

  /*
  To handle the behaviour of the Effect when different Action instances 
  occurs on the same effect you can change mergeMap to other operators
  */

  // effect from simulating an API call success
  getMockDataEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetMockData),
      tap(() => { console.log('new getMockDataEffect occurred in queue') }),
      mergeMap((action) => {
        console.log('new getMockDataEffect running')
        return this.mockApi.getDataFromId(action.id).pipe(
          map(res => ApiSuccess({ data: res })),
          catchError(error => of(ApiError({ error }))),
          tap(() => { console.log('getMockDataEffect Finished') })
        )
      }
      )
    )
  )

  // effect for simulating an API error
  getMockDataWithErrorEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetMockDataWithError),
      tap(() => { console.log('new getMockDataWithErrorEffect occurred in queue') }),
      mergeMap((action) => {
        console.log('new getMockDataWithErrorEffect running')
        return this.mockApi.getApiError().pipe(
          map(res => ApiSuccess({ data: res })),
          catchError(error => of(ApiError({ error }))),
          tap(() => { console.log('getMockDataWithErrorEffect Finished') })
        )
      }
      )
    )
  )


  constructor(private actions$: Actions, private mockApi: MockApiService) { }
}