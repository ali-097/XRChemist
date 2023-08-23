import ServiceCards from './ServiceCards/ServiceCards'
import webLogo from '../../../public/WebLogo.png'
import uXLogo from '../../../public/UXLogo.png'
import './Services.css'

const Services = () => {

    const services = [
        {
            logo: uXLogo,
            title: 'UI/UX Design',
            text: 'Our UI/UX design team is passionate about creating exceptional user experiences that engage and delight customers. That\'s why we take a user-centric approach to design, ensuring that every element of our designs is optimized for maximum impact.'
        },
        {
            logo: webLogo,
            title: 'Web Development',
            text: 'Our web development team is skilled in creating robust and scalable websites that are optimized for performance and search engine visibility. Whether you need, we have the expertise to deliver a solution that meets your needs and exceeds your expectations.'
        }
    ]

    const serviceCards = services.map((service, index) => {
        return <ServiceCards key={index} logo={service.logo} title={service.title} text={service.text} />
    })
    
    return (
    <div>
        <h1 className='services--text'>Our Services</h1>
        <div className='service--cards--container'>{serviceCards}</div>
    </div>
    )
}

export default Services
