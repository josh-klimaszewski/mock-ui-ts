import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as constants from "../constants/index";
import * as actions from "./index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore;
  });
  it("getInvoices returns expected action", () => {
    const payload = "test payload";
    const expectedAction = {
      payload,
      type: constants.GET_INVOICES
    };
    expect(actions.getInvoices(payload)).toEqual(expectedAction);
  });
  it("fetchInvoices dispatches getInvoices", () => {
    // const ROOT_URL = "https://cdn.contentful.com";
    // const SPACE_ID = "rei9f1q1h44r";
    // const CDN_ACCESS_TOKEN =
    //   "2a6b04ce262c6228bb6b14a637fa02136ea1724d842e9917e8062e3ab1c4d97c";
    // const response = axios.get(
    //   `${ROOT_URL}/spaces/${SPACE_ID}/entries?access_token=${CDN_ACCESS_TOKEN}
    //           &content_type=invoices`
    // );
    
    const expectedAction = {

    };
  });
});
