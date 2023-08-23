import './MainContent.css'
import underline from '../../../public/underline.png'

const MainContent = () => {

    const handleContactClick = () => {
        console.log('contact clicked')
    }

    return (
    <div className="main-content--container">
        <p className='welcome--text'>Welcome to XR Chemist</p>
        <p className='intro--text'>Crafting solutions for a </p>
        <p className='intro--text new--line'>better <span className='secondary--text'>Digital World</span></p>
        <img src={underline} alt="underline" className='underline' />
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <button 
                className='contact--button' 
                style={{marginTop:"100px"}}
                onClick={handleContactClick}
            >Let's talk
            </button> 
        </div>
    </div>
    )
}

export default MainContent