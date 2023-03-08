import './display.css'

const Display = (props) => {
    return(
        <div className='display'>

            <h2>{props.valor}</h2>
            
        </div>
        
    );
}

export default Display;