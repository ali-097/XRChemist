import './ToolCards.css'

interface propType {
    title: string,
    logo: string
}

const ToolCards = (props: propType) => {

  const handleToolClick = () => {
    console.log(`Clicked on ${props.title}`)
  }

  return (
    <div className='tool--card--container' onClick={handleToolClick}>
        <img src={props.logo} className='tool--logo'></img>
        <h4 className='tool--card--title'>{props.title}</h4>
    </div>
  )
}

export default ToolCards