import { SET_LOCATION } from './actions';

interface AppState {
  location: string;
}

const initialState: AppState = {
  location: '',
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
