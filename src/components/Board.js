import Space from './Space'
import {useState} from 'react'

function Board({setSelected, selected}) {

    let boardMatrix = [[null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, 'water', 'water', null, null, 'water', 'water', null, null],
    [null, null, 'water', 'water', null, null, 'water', 'water', null, null],
    [null, null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null, null]]
    
    const [boardCoords, setBoardCoords] = useState(boardMatrix)

    function assignOccupant(row, col, piece) {
        if(row > 5) {
            let newBoardCoords = boardCoords.slice()
            let newRow = newBoardCoords[row].slice()
            newRow[col] = piece
            newBoardCoords.splice(row, 1, newRow)
            setBoardCoords(newBoardCoords)
            setSelected(null)
        } else {
            console.log("Invalid")
        }
    }

    console.log(boardCoords)

    return (
        <div id='board'>
            {boardCoords.map((array, row) => array.map((space, column) => <Space occupant={space} assignOccupant={assignOccupant} row={row} column={column} setSelected={setSelected} selected={selected}/>))}
        </div>
    )
}

export default Board