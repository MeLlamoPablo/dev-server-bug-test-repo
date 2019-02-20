import React, { FC } from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import * as actions from "./store/actions";
import { RootState } from "./store/types";
import { ActionType } from "typesafe-actions";

interface OwnProps {}
interface StateProps {
  count: number;
}
interface DispatchProps {
  decrement: (payload: ActionType<typeof actions.decrement>["payload"]) => void;
  increment: (payload: ActionType<typeof actions.increment>["payload"]) => void;
}

const Counter: FC<OwnProps & StateProps & DispatchProps> = ({
  decrement,
  increment,
  count
}) => (
  <div>
    Count: {count}
    <button onClick={() => increment({ amount: 1 })}>+1</button>
    <button onClick={() => increment({ amount: 10 })}>+10</button>
    <button onClick={() => decrement({ amount: 1 })}>-1</button>
    <button onClick={() => decrement({ amount: 10 })}>-10</button>
  </div>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({ count: state.count });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  decrement: actions.decrement,
  increment: actions.increment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
