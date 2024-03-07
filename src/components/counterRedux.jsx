import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";

const CounterRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </>
  );
};

export default CounterRedux;
