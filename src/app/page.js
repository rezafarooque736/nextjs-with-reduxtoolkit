"use client";

import { useSelector, useDispatch } from "react-redux";
import styles from "./page.module.css";
import { decrement, increment } from "@/redux/slices/counter/counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <main className={styles.main}>
      <h1>Count is {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </main>
  );
}
