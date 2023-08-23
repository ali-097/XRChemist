import './NarBar.css'
import logo from '../../../public/logo.png'

const NavBar = () => {

  const homeButtonHandler = () => {
    console.log('Home button clicked')
  }

  const servicesButtonHandler = () => {
    console.log('Services button clicked')
  }

  const contactButtonHandler = () => {
    console.log('Contact button clicked')
  }

  return (
    <div className='navbar--container'>
        <img className='logo' src={logo}></img>
        <div className='navbar--items'>
          <p onClick={homeButtonHandler} className='navbar--item'>Home</p>
          <p onClick={servicesButtonHandler} className='navbar--item'>Services</p>
          <p onClick={contactButtonHandler} className='navbar--item'>Contact</p>
        </div>
    </div>
  )
}

export default NavBar