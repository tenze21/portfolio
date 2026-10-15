import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'
import Technology from './components/Technology'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <About/>
        <Technology/>
      </main>
    </>
  )
}

export default App
