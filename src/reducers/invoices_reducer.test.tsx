import * as constants from "../constants";
import invoices_reducer from "./invoices_reducer";

describe("invoices reducer", () => {
  it("returns initial state", () => {
    expect(invoices_reducer(undefined, {})).toEqual({ invoices: [] });
  });
  it("returns correctGET_INVOICES payload", () => {
    const beforeState = { invoices: [] };
    const payload = {
      data: {
        items: ["invoice 1", "invoice 2", "invoice 3"]
      }
    };
    const action = {
      payload,
      type: constants.GET_INVOICES
    };
    const afterState = invoices_reducer(beforeState, action);
    expect(afterState).toEqual({
      invoices: ["invoice 1", "invoice 2", "invoice 3"]
    });
  });
});
