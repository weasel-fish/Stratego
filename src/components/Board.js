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
            {boardCoords[0].map((space, index) => <Space occupant={space} num ={'A' + (index + 1)} />)}
            {boardCoords[1].map((space, index) => <Space occupant={space} num ={'B' + (index + 1)} />)}
            {boardCoords[2].map((space, index) => <Space occupant={space} num ={'C' + (index + 1)} />)}
            {boardCoords[3].map((space, index) => <Space occupant={space} num ={'D' + (index + 1)} />)}
            {boardCoords[4].map((space, index) => <Space occupant={space} num ={'E' + (index + 1)} />)}
            {boardCoords[5].map((space, index) => <Space occupant={space} num ={'F' + (index + 1)} />)}
            {boardCoords[6].map((space, index) => <Space occupant={space} num ={'G' + (index + 1)} />)}
            {boardCoords[7].map((space, index) => <Space occupant={space} num ={'H' + (index + 1)} />)}
            {boardCoords[8].map((space, index) => <Space occupant={space} num ={'I' + (index + 1)} />)}
            {boardCoords[9].map((space, index) => <Space occupant={space} num ={'J' + (index + 1)} />)}
        </div>
    )
}

export default Board