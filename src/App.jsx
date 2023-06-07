import './App.css'
import Home from './Home'
import Quiz from './Quiz'
import { useState } from 'react'

function App() {

  const [start, setStart] = useState(false)
  const [active, setActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [end, setEnd] = useState(false)

  return (
    <>
      {!start && <Home setStart={setStart} start={start} active={active} setActive={setActive}/>}
       <Quiz 
        setActive={setActive}
        setStart={setStart}
        active={active} 
        start={start} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex}
        end={end} 
        setEnd={setEnd}
        />
    </>
  )
}

export default App
