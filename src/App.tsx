import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'
import Technology from './components/Technology'
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <About/>
        <Technology/>
        <Projects/>
      </main>
    </>
  )
}

export default App
