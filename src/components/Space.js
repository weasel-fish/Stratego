import {useState} from 'react'

function Space({row, column, occupant, setSelected, selected, assignOccupant}) {

    function handleSpaceClick() {
        if(occupant == null) {
            assignOccupant(row, column, selected)
        } else if(occupant !== 'water') {
            let oldOcc = occupant
            assignOccupant(row, column, selected)
            setSelected(oldOcc)
        }
    }

    return (
        <div onClick={handleSpaceClick} className={occupant == 'water' ? 'water': "space"}>
            <p>{occupant == 'water' ? null : occupant != null ? occupant.name : row + ', ' + column}</p>
        </div>
    )
}

export default Space