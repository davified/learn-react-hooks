import React, { useState } from 'react'


const SimpleCounterExample = () => {
  const [count, setCount] = useState(42)

  return (
    <div>
      <h2>Example #1: simple counter</h2>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me!</button>
    </div>
  )
}

export default SimpleCounterExample