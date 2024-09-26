import './App.css';
import { useCallback, useEffect,useState } from 'react';

function App() {
  const[quote, setQuote] = useState("");
//  #2
useEffect(()=>{
  const getQuote = async()=>{
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data.content);
    setQuote(data.content)
}
getQuote()
}, [])

//  #3
//  const getQuote = useCallback(async()=>{
//  const response = await fetch('https://api.quotable.io/random');
//  const data = await response.json();
//  console.log(data.content);
//  setQuote(data.content)
//  },[])
//  useEffect(()=>{
//  getQuote()
//  }, [getQuote])

  return (
    <div className="App">
      <p>{quote}</p>
    </div>
  );
}

export default App;
