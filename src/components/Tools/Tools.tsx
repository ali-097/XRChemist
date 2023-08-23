import ToolCards from './ToolCards/ToolCards'
import './Tools.css'
import tools from './ToolsData'

const Tools = () => {


    const toolsCards = tools.map(tool => {
        return <ToolCards key={tool.title} title={tool.title} logo={tool.logo} />
    })

    return (
    <div className='tools--container'>
        <h1 style={{marginBottom:"66px"}}>Tools We Use</h1>
        <div className='tools--content'>
            {toolsCards}
        </div>
    </div>
    )
}

export default Tools