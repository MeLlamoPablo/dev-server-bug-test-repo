import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export interface RootState {
  count: number;
}

export type RootAction = ActionType<typeof actions>;
