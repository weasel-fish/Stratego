import Space from './Space'
import {useState} from 'react'

function Board({setSelected}) {

    let boardMatrix = [['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    [null, null, 'water', 'water', null, null, 'water', 'water', null, null],
    [null, null, 'water', 'water', null, null, 'water', 'water', null, null],
    ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'], 
    ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'], 
    ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'], 
    ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']]
    
    const [boardCoords, setBoardCoords] = useState(boardMatrix)

    return (
        <div id='board'>
            {boardCoords.map((array, row) => array.map((space, column) => <Space occupant={space} row={row} column={column} setSelected={setSelected}/>))}
        </div>
    )
}

export default Board