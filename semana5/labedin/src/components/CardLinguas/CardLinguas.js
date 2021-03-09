import React from 'react';
import './CardLinguas.css'

function CardLinguas(props) {
    return (
        <div className="linguascard-container">
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardLinguas;