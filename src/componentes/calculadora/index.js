import Display from '../display';
import './calculadora.css'
import Botoes from '../botoes';
import { useState } from 'react';

const Calculadora = () => {
    
    const [resultado, setResultado] = useState("");
    
    const mostrarNoDisplay = (valor) =>{
        setResultado(valor)
    }
    
    const numeroPassado = (valor) => {
        setResultado(resultado.concat(valor))
    }
    
    const apagaUm = () => {
        setResultado(resultado.slice(0, -1))
    }

    const operador = (event) => {
        setResultado(resultado.concat(event))
    }
    
    const resolveOperacao = () => {
        try{
            setResultado(eval(resultado).toString()) // eslint-disable-line
        }catch{
            setResultado('Error')
        }
        
    }

    return (
        <div className='box'>
            <section className='calculadora'>
                <Display 
                    valor={resultado}/>
                <Botoes
                    resultado={mostrarNoDisplay}
                    operador={operador}
                    apaga={apagaUm}
                    passaNumero={numeroPassado}
                    resolve={resolveOperacao}
                />
            </section>

        </div>
    );
}

export default Calculadora;