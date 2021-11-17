import WaterTile from "./WaterTile"
import Space from './Space'


function Square({row, column, occupant, setSelected, selected, assignOccupant}) {

    // function handleSpaceClick() {
    //     if(occupant == null && selected != null) {
    //         assignOccupant(row, column, selected)
    //     } else if(occupant !== 'water' && selected != null) {
    //         let oldOcc = occupant
    //         assignOccupant(row, column, selected)
    //         setSelected(oldOcc)
    //     } else if(occupant && selected == null) {
    //         let oldOcc = occupant
    //         assignOccupant(row, column, null)
    //         setSelected(oldOcc)
    //     }
    // }

    return (
        // <div onClick={handleSpaceClick} className={occupant == 'water' ? 'water': "space"}>
        //     <p>{occupant == 'water' ? null : occupant != null ? occupant.name : row + ', ' + column}</p>
        // </div>

        <>
            {occupant == 'water' ? <WaterTile /> : <Space assignOccupant={assignOccupant} occupant={occupant} selected={selected} setSelected={setSelected} row={row} column={column}/>}
        </>
    )
}

export default Square