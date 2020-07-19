import {
  START_LAYOUT_SPINNER,
  STOP_LAYOUT_SPINNER
} from './constants'

const INITIALE_STATE = {
  isLayoutSpinnerActive: false,
  fetching: {}
};

const reducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case START_LAYOUT_SPINNER:
      return {
        ...state,
        isLayoutSpinnerActive: true,
        fetching: { ...state.fetching, [action.payload]: true },
      };

    case STOP_LAYOUT_SPINNER: {
      const newState = {
        ...state,
        fetching: { ...state.fetching, [action.payload]: false }
      };

      if (!Object.values(newState.fetching).includes(true)) {
        newState.isLayoutSpinnerActive = false
      }

      return newState
    }

    default:
      return state
  }
};

export { reducer as spinners }