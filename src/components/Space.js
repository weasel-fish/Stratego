import {useState} from 'react'

function Space({row, column, occupant, setSelected}) {

    return (
        <div className={occupant == 'water' ? 'water': "space"}>
            <p>{occupant == 'water' ? null : row + ', ' + column}</p>
        </div>
    )
}

export default Space