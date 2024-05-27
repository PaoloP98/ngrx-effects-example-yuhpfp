import { ApiError, ApiSuccess, ApiGetMockData, ApiGetMockDataWithError, ModeChange } from './actions';
import { RootEffects } from './effects';
import { rootReducer, RootState } from './reducer';
import { getStateError, getStateSelectedData } from './selectors';

export const fromRoot = {
  ApiError, ApiSuccess, ApiGetMockData, rootReducer, RootEffects, ApiGetMockDataWithError, getStateError, getStateSelectedData, RootState, ModeChange
};

