import {
  START_LAYOUT_SPINNER,
  STOP_LAYOUT_SPINNER
} from './constants'

export const startLayoutSpinner = data => ({ type: START_LAYOUT_SPINNER, payload: data })
export const stopLayoutSpinner = data => ({ type: STOP_LAYOUT_SPINNER, payload: data })
