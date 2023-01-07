import React, { useState } from "react";

export const Sample: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p role="label">count is {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
    </div>
  );
};
