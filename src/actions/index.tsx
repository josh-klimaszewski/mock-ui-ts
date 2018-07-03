import axios from 'axios';
import * as constants from '../constants';
const ROOT_URL = 'https://cdn.contentful.com';
const SPACE_ID = 'rei9f1q1h44r';
const CDN_ACCESS_TOKEN = '2a6b04ce262c6228bb6b14a637fa02136ea1724d842e9917e8062e3ab1c4d97c';

export interface GetInvoices {
    payload: any;
    type: constants.GET_INVOICES;
}
export const getInvoices = (invoices: any): GetInvoices => ({
    payload: invoices,
    type: constants.GET_INVOICES  
})

export const fetchInvoices = () => (dispatch: any) => {
    return axios.get(
            `${ROOT_URL}/spaces/${SPACE_ID}/entries?access_token=${CDN_ACCESS_TOKEN}
            &content_type=invoices`
            ).then(response => dispatch(getInvoices(response)))
}

// export type InvoiceAction = GetInvoices;



// export function getInvoices(): GetInvoices {
//     axios.get(
//     `${ROOT_URL}/spaces/${SPACE_ID}/entries?access_token=${CDN_ACCESS_TOKEN}
//     &content_type=invoices`
//     ).then(response => {
//         return {
//             payload: response.data,
//             type: constants.GET_INVOICES
            
//         }
//     });
    
// }

// export interface IncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }

// export interface DecrementEnthusiasm {
//     type: constants.DECREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// export function incrementEnthusiasm(): IncrementEnthusiasm {
//     return {
//         type: constants.INCREMENT_ENTHUSIASM
//     }
// }

// export function decrementEnthusiasm(): DecrementEnthusiasm {
//     return {
//         type: constants.DECREMENT_ENTHUSIASM
//     }
// }