import axios from "axios";
import * as constants from "../constants";
const ROOT_URL = "https://cdn.contentful.com";
const SPACE_ID = "rei9f1q1h44r";
const CDN_ACCESS_TOKEN =
  "2a6b04ce262c6228bb6b14a637fa02136ea1724d842e9917e8062e3ab1c4d97c";

export interface GetInvoices {
  payload: any;
  type: constants.GET_INVOICES;
}
export const getInvoices = (invoices: any): GetInvoices => ({
  payload: invoices,
  type: constants.GET_INVOICES
});

export const fetchInvoices = () => (dispatch: any) => {
  return axios
    .get(
      `${ROOT_URL}/spaces/${SPACE_ID}/entries?access_token=${CDN_ACCESS_TOKEN}
            &content_type=invoices`
    )
    .then(response => dispatch(getInvoices(response)));
};
