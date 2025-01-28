import { useState, useEffect } from 'react';
const Card = ({ title, description }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked ${hasLiked ? '💖' : '🤍'}`);
  }, [hasLiked]);

  // This is a useEffect that will run when the component is mounted
  // Most common use case is to fetch data
  // Deps is emmpty array because we want to run this effect only once
  // useEffect(() => {
  //   console.log(`${title} has been clicked ${count} times`);
  // }, []);

  return (
    <div className='card' onClick={() => setCount(count + 1)}>
      <h2>{title} {count || ''}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
       {hasLiked ? '💖' : '🤍'}
      </button>
    </div>
  )
}

function App() {
  
  return (
    <div className="card-container" >
      
      <Card title="Star Wars" description="This is a card" />
      <Card title="The Mandalorian" description="This is a card" />
      <Card title="The Lion King" description="This is a card" />
    </div>
  )
}

export default App
