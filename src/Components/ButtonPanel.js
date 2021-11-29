import React from 'react'
import CalcButton from './CalcButton'

function ButtonPanel() {
    return (
        <div className = 'buttonPanel'>
            <CalcButton buttonValue = '1' />
            <CalcButton buttonValue = '2' />
            <CalcButton buttonValue = '3' />
            <CalcButton buttonValue = '+' />

            <CalcButton buttonValue = '4' />
            <CalcButton buttonValue = '5' />
            <CalcButton buttonValue = '6' />
            <CalcButton buttonValue = '-' />

            <CalcButton buttonValue = '7' />
            <CalcButton buttonValue = '8' />
            <CalcButton buttonValue = '9' />
            <CalcButton buttonValue = 'X' />

            <CalcButton buttonValue = 'C' />
            <CalcButton buttonValue = '0' />
            <CalcButton buttonValue = '=' />
            <CalcButton buttonValue = '/' />
        </div>
    )
}

export default ButtonPanel
