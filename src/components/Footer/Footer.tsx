import insta from '../../../public/SocialLogos/insta.png'
import fb from '../../../public/SocialLogos/fb.png'
import twitter from '../../../public/SocialLogos/twitter.png'
import './Footer.css'

const Footer = () => {

  const handleServiceClick = () => {
    console.log('Go to Services')
  }

  const handlePrivacyClick = () => {
    console.log('Go to Privacy')
  }

  const handleContactClick = () => {
    console.log('Go to Contact')
  }

  const handleTermClick = () => {
    console.log('Go to Terms')
  }

  const gotoInsta = () => {
    console.log('Instagram.com')
  }

  const gotoFB = () => {
    console.log('Facebook.com')
  }

  const gotoTwitter = () => {
    console.log('Twitter.com')
  }

  return (
    <div className='footer--container'>
        <div className='footer--copyright'>
            (c) Copyright XR Chemist 2023. All rights reserved
        </div>
        <div className='footer--links'>
            <div className='footer--grid--item' onClick={handleServiceClick}>Our Services</div>
            <div className='footer--grid--item' onClick={handlePrivacyClick}>Privacy Policy</div>
            <div className='footer--grid--item' onClick={handleContactClick}>Contact us</div>
            <div className='footer--grid--item'onClick={handleTermClick}>Terms and conditions</div>
        </div>
        <div className='footer--socials'>
            <img src={insta} alt='instagram' className='footer--social--logo' onClick={gotoInsta}/>
            <img src={fb} alt='facebook' className='footer--social--logo' onClick={gotoFB}/>
            <img src={twitter} alt='twitter' className='footer--social--logo' onClick={gotoTwitter}/>
        </div>
    </div>
  )
}

export default Footer