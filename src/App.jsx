import { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [sign, setSign] = useState('+');
  const [total, setTotal] = useState(0);

  let result;
  if (sign === '+') result = parseInt(input1) + parseInt(input2);
  else if (sign === '-') result = parseInt(input1) - parseInt(input2);
  else if (sign === '*') result = parseInt(input1) * parseInt(input2);
  else result = parseInt(input1) / parseInt(input2);

  if (input1 === '' || input2 === '') result = null;
  const handleClick = (operator) => {
    setSign(operator);
    setTotal((prev) => prev + 1);
  };
  const handleReset = () => {
    setSign('+');
    setInput1('');
    setInput2('');
  };
  return (
    <div className="app ">
      <p>Total operations {total}</p>
      <div>
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <span>{sign}</span>
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="result-container">
        <button onClick={handleReset}>Reset</button>
        {result && <div>Result: {result}</div>}
      </div>
    </div>
  );
}

export default App;
