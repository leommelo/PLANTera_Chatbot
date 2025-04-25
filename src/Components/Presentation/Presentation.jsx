import React from 'react'
import './Presentation.css'
import { useState } from 'react'
import LogoFuria from '../../assets/LogoFuria.svg'
import Plantera from '../../assets/PLANTera1.svg'

const Presentation = () => {
  return (
    <div className='presentation'>
        <div className='presentation__logo'>
            <img src={LogoFuria} alt="" />
        </div>
        <div className='info'>
            <h2>Sua C4 de informações da FURIA.</h2>
            <h1><span className='roxo' data-text="PLANT">PLANT</span>era</h1>
            <h3>
                <span className="typing-line">Conheça o novo chatbot oficial da Fúria:</span>
                <span className="typing-line">rápido e eficiente para te informar</span>
                <span className="typing-line">sobre os resultados das partidas</span>
                <span className="typing-line">e as próximas disputas do time de CS.</span>
            </h3>
            <img src={Plantera} alt="Imagem da PLANTera" className='plantera' />
        </div>
    </div>
  )
}

export default Presentation