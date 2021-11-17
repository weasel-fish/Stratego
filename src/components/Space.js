function Space({row, column, occupant, setSelected, selected, assignOccupant}) {

    function handleSpaceClick() {
        if(occupant == null && selected != null) {
            assignOccupant(row, column, selected)
        } else if(occupant !== 'water' && selected != null) {
            let oldOcc = occupant
            assignOccupant(row, column, selected)
            setSelected(oldOcc)
        } else if(occupant && selected == null) {
            let oldOcc = occupant
            assignOccupant(row, column, null)
            setSelected(oldOcc)
        }
    }

    return (
        <div onClick={handleSpaceClick} className="space">
            <p>{occupant?.name}</p>
        </div>
    )
}

export default Space