import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <h2>🧮 Simple Calculator</h2>
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {['1','2','3','+','4','5','6','-','7','8','9','*','C','0','=','/'].map((btn, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (btn === 'C') handleClear();
                else if (btn === '=') handleCalculate();
                else handleClick(btn);
              }}
              className={btn === '=' ? 'equal' : btn === 'C' ? 'clear' : ''}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
