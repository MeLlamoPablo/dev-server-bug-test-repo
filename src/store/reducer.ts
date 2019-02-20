import { Reducer } from "redux";
import { RootAction, RootState } from "./types";
import { getType } from "typesafe-actions";
import * as actions from "./actions";

const reducer: Reducer<RootState, RootAction> = (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case getType(actions.increment):
      return {
        count: state.count + action.payload.amount
      };
    case getType(actions.decrement):
      return {
        count: state.count - action.payload.amount
      };
    default:
      return state;
  }
};

export default reducer;
