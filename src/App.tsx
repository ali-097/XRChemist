import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'
import NavBar from './components/NarBar/NavBar'
import Services from './components/Services/Services'
import Tools from './components/Tools/Tools'

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Services />
      <Tools />
      <Contact />
      <Footer />
    </>
  )
}

export default App
