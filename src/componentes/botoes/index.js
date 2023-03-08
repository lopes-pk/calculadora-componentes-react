import './botoes.css'

const Botoes = (props) => {


    const pegaNumero = (event) => {
        props.passaNumero(event.target.innerHTML)
    }

    const operador = (event) => {
        props.operador(event.target.value)
    }

    const deleta = () => {
        props.resultado("")
    }

    const apaga = () => {
        props.apaga()
    }

    const resolve = () => {
        props.resolve()
    }

    return (
        <div className='botoes'>
            <button onClick={deleta} className='botao-cima'>AC</button>
            <button onClick={apaga} className='botao-cima'>C</button>
            <button onClick={operador} className='botao-cima' value=''>%</button>
            <button onClick={operador} className='botao-simbolo' value='/' >&divide;</button>
            <button className="botao-numero" onClick={pegaNumero} >7</button>
            <button className="botao-numero" onClick={pegaNumero} >8</button>
            <button className="botao-numero" onClick={pegaNumero} >9</button>
            <button className="botao-simbolo" onClick={operador} value='*'>&times;</button>
            <button className="botao-numero" onClick={pegaNumero}>4</button>
            <button className="botao-numero" onClick={pegaNumero} >5</button>
            <button className="botao-numero" onClick={pegaNumero} >6</button>
            <button className="botao-simbolo" onClick={operador} value='-'>-</button>
            <button className="botao-numero" onClick={pegaNumero} >1</button>
            <button className="botao-numero" onClick={pegaNumero} >2</button>
            <button className="botao-numero" onClick={pegaNumero} >3</button>
            <button className="botao-simbolo" onClick={operador} value='+'>+</button>
            <button className="botao-zero" onClick={pegaNumero} style={{width:'5.5rem', borderRadius: '3em'}}>0</button>
            <button className="botao-numero" onClick={pegaNumero} >,</button>
            <button onClick={resolve} className='botao-simbolo' >=</button>

        </div>

    );
}

export default Botoes;