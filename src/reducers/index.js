import { customerOrderReducer } from "./customerOrder.reducers";

const { combineReducers } = require("redux");
const { authReducer } = require("./auth.reducer");

const rootReducer = combineReducers({
  auth: authReducer,
  customerOrder: customerOrderReducer
});

export default rootReducer;