import { type ReactElement, useState } from "react";

import cls from "./Counter.module.scss";

const Counter = (): ReactElement => {
  const [count, setCount] = useState(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={cls.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};

export default Counter;
