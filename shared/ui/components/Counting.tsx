import { useState } from "react";

export default function Counting() {
  const [count, setCount] = useState(0);

  const a = 1;

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>더하기</button>
    </div>
  );
}
