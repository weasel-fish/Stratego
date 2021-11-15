import {useState} from 'react'

function Space({num, occupant}) {
    
    return (
        <div className={occupant == 'water' ? 'water': "space"}>
            <p>{occupant == 'water' ? null : num}</p>
        </div>
    )
}

export default Space