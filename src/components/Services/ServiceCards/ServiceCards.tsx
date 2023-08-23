import './ServiceCards.css'

interface propType {
    logo: string,
    title: string,
    text: string
}

const ServiceCards = (props: propType) => {

    const readMoreHandler = () => {
        console.log('Read More')
    }

    return (
    <div className='card--container'>
        <div className='card--contents'>
            <img  className='card--logo' src={props.logo}></img>
            <h2 className='card--title'>{props.title}</h2>
            <p className='card--text'>{props.text}</p>
        </div>
        <div>
            <button className='card--button' onClick={readMoreHandler}>Read More</button>
        </div>
    </div>
    )
}

export default ServiceCards