import React from 'react'
import { useState, useEffect } from 'react'

function CalcView(props) {

    return (
        <span className="calcView">
            <div>
                {props.viewport}
            </div>
        </span>
    )
}

export default CalcView