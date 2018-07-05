import { combineReducers } from "redux";
import InvoicesReducer from "./invoices_reducer";

const rootReducer = combineReducers({
  invoices: InvoicesReducer
});

export default rootReducer;
