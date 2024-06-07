import "./NewCounter.css";

function NewCounter({ value, index, counters, setCounters }) {
  const addOne = () => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const removeOne = () => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };

  const reset = () => {
    const newCounters = [...counters];
    newCounters[index] = 0;
    setCounters(newCounters);
  };

  return (
    <div className="newCounter">
      <div className="increment">
        <i className="fa-solid fa-minus" onClick={removeOne}></i>
        <div className="counter">
          <p>{value}</p>
        </div>
        <i className="fa-solid fa-plus" onClick={addOne}></i>
      </div>

      <button className="addCounter" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default NewCounter;
