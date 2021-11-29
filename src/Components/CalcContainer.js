import React from 'react'
import ButtonPanel from './ButtonPanel'

function CalcContainer() {
    return (
        <div className = 'calcContainer'>
            <span className = 'calcView'></span>
            <hr style = {{width: "100%"}} />
            <ButtonPanel />

            
        </div>
    )
}

export default CalcContainer
