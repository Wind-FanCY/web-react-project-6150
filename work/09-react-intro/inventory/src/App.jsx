import { useState } from 'react'
import './App.css'
import Reorder from './Reorder'

function App() {
  const [count, setCount] = useState(0);
  
  const onReorder = () => {
    setCount(5);
  };

  return (
    <>
      <div className="inventory">
        <h2 className="inventory__number">The inventory is {count}</h2>
        <div className="inventory__buttons">
          <button className="buttons__add" onClick={() => setCount(count + 1)}>+1</button>
          { !count ? <Reorder onReorder={ onReorder } /> : null }
          <button className="buttons__subtract" onClick={() => setCount(count - 1)} disabled={!count}>-1</button>
        </div>
      </div>
    </>
  )
}

export default App
