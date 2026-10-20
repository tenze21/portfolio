import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'
import Technology from './components/Technology'
import Projects from './components/Projects';
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <About/>
        <Technology/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </main>
    </>
  )
}

export default App
