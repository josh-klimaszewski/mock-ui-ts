// import { EnthusiasmAction } from '../actions';
// import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';
// import { StoreState } from '../types/index';


// export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
//   switch (action.type) {
//     case INCREMENT_ENTHUSIASM:
//       return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//     case DECREMENT_ENTHUSIASM:
//       return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//   }
//   return state;
// }

// import { InvoiceAction } from '../actions/index';
// import { GET_INVOICES } from '../constants/index';

// export default function(state = { invoices: [] }, action: InvoiceAction) {
//     switch(action.type) {
//         case GET_INVOICES:
//             return {...state, invoices: action.payload.data.items};
//         default:
//             return state;
//     }   
// }
import { combineReducers } from 'redux';
import InvoicesReducer from './invoices_reducer';

const rootReducer = combineReducers({
    invoices: InvoicesReducer
});

export default rootReducer;
