// import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alerts from './components/Alerts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from 'react-router-dom'
import About from './components/About'
function App() {
  const [alerts, setalerts] = useState(null)
  const showAlerts = (message, type) => {
    setalerts({
      //* msg is the property
      msg: message,
      //* message is the parameter..
      type: type,
    })
  }
  const [mode, setmode] = useState('dark')
  const tooglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      showAlerts('Dark mode enabled,', 'success')
      document.body.style.backgroundColor = '#383838'

      console.log('chanign mode')
    } else {
      setmode('light')
      showAlerts('Light mode enabled,', 'success')

      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* {' '} */}
      <Router>
        <Navbar title="Abhay" mode={mode} tooglemode={tooglemode} />
        ;<Alerts alerts={alerts} />
        <Routes>
          <Route path="/about" element={<About />} />
          {/* route for the the alters; */}
          <Route
            path="/"
            element={<Textform showAlerts={showAlerts} mode={mode} />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
