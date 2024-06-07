import { useState } from "react";
import "./Counter.css";
import NewCounter from "./NewCounter/NewCounter";

function Counter() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  return (
    <main>
      <button
        className={`addCounter ${counters.length > 2 && "hide"}`}
        onClick={addCounter}
      >
        Add counter
      </button>
      <div className="counterContainer">
        {counters.map((counter, index) => (
          <NewCounter
            key={index}
            value={counter}
            index={index}
            counters={counters}
            setCounters={setCounters}
          />
        ))}
      </div>
    </main>
  );
}

export default Counter;
