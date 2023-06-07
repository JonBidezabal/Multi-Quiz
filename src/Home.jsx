import Topics from './Topics'
import Login from './Login'

function Home(props) {

  const {setStart, start, setActive, active} = props

  return (
    <>
    {!active && <Login setActive={setActive}/>}
    {active && <Topics setStart={setStart} start={start}/>}

       
    </>
  )
}

export default Home
