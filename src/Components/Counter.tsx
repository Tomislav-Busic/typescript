
const Counter = () => {
    
  return (
    <>
        <h1>Count is {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
    </>
  )
}

export default Counter