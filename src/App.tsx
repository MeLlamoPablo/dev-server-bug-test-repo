import React, { FC } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import Counter from "./Counter";

const App: FC = () => (
  <Provider store={createStore(reducer)}>
    <Counter />
  </Provider>
);

export default App;
