import { createStandardAction } from "typesafe-actions";

export const increment = createStandardAction("INCREMENT")<{
  amount: number;
}>();
export const decrement = createStandardAction("DECREMENT")<{
  amount: number;
}>();
