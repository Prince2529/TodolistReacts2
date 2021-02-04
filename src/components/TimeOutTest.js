import React, { useState,useEffect } from 'react';


const App = () => {

  const [count,setCount] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount('Timeout called!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      Hello, World
    </div>
  );
}
// export default TimeOutTest;