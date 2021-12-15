import React from 'react'

function CalcView(props) {

    return (
        <span className = {props.viewStyle} >
            <div>
                {props.viewport}
            </div>
        </span>
    )
}

export default CalcView
