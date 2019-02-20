import { ActionType } from "typesafe-actions";

export type Dispatcher<T> = (payload: ActionType<T>["payload"]) => void;
