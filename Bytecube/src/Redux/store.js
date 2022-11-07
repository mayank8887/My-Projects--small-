
import { legacy_createStore } from "redux";
import {reducer as addReducer} from "./reducer"
export const store = legacy_createStore(addReducer);

