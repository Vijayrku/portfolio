import React, { useCallback, useState, type FC } from "react";
import Button from "../../blocks/button/Button";

const Child:FC<{label: string}> = React.memo(({label}) => {
  return (
    <div>
      <h2>{label}</h2>
      <p>This is a child component that can be reused.</p>
    </div>
  );
});
const Home = () => {
  const [count, setCount] = useState<number>(0);
const [label, setLabel] = useState<string>('Click Me');
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      {count > 0 && <p>Button clicked {count} times</p>}
      <button
        type="button"
        className="cmp-button secondary"
        onClick={() => setLabel('Reset Count')}
      >
        Reset Count
      </button>
      <Button
        primary={true}
        label="Click Me"
        onClick={() => handleClick()}
        size="medium"
      />

      <Child label={label} />
    </div>
  );
}

export default Home;