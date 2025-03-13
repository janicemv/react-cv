import './App.css'
import ReactCV from 'react-cv'
import { CVData } from './data/data';


function App() {

  return (
    <>
    <ReactCV
    {... CVData} />
    </>
  )
}

export default App
