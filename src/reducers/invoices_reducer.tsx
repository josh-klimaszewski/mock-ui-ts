import * as constants from '../constants';

export default function(state = {invoices: []}, action: any) {
    switch(action.type) {
        case constants.GET_INVOICES:
            return {...state, invoices: action.payload.data.items};
        default:
            return state;
    }
}