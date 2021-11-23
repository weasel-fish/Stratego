import Square from './Square'
import {useState, useEffect} from 'react'
import {API_ROOT} from '../constants'

function Board({setSelected, selected, auto, pieceDictionary}) {

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
    
    let [flag, bomb, marsh, gen, col, maj, cap, lieu, serg, min, sco, spy] = [pieceDictionary.Flag, pieceDictionary.Bomb, pieceDictionary.Marshall, pieceDictionary.General, pieceDictionary.Colonel, pieceDictionary.Major, pieceDictionary.Captain, pieceDictionary.Lieutenant, pieceDictionary.Sergeant, pieceDictionary.Miner, pieceDictionary.Scout, pieceDictionary.Spy]

    let autoPopulatedBoard = [[null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, 'water', 'water', null, null, 'water', 'water', null, null],
    [null, null, 'water', 'water', null, null, 'water', 'water', null, null],
    [cap, cap, cap, maj, maj, maj, col, col, gen, marsh], 
    [min, serg, serg, serg, serg, lieu, lieu, lieu, lieu, cap], 
    [sco, sco, sco, sco, sco, sco, min, min, min, min], 
    [flag, bomb, bomb, bomb, bomb, bomb, bomb, spy, sco, sco]]

    const [boardCoords, setBoardCoords] = useState(boardMatrix)

    useEffect(() => {
        if(auto) {
            setBoardCoords(autoPopulatedBoard)
        } else {
            setBoardCoords(boardMatrix)
        }
    }, [auto])

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

    function fullBoard(board) {
        for(let i = 6; i < 10; i++) {
            if(board[i].includes(null)) {
                return false
            }
        }
        return true
    }

    function handleConfirm() {
        fetch(`${API_ROOT}/testgames`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                row_one: ['hello', 'there']
            })
        })
    }

    let full = fullBoard(boardCoords)
    
    return (
        <>
        <div id='board'>
            {boardCoords.map((array, row) => array.map((occupant, column) => <Square occupant={occupant} assignOccupant={assignOccupant} row={row} column={column} setSelected={setSelected} selected={selected}/>))}
        </div>
            <button disabled={!full} onClick={handleConfirm}>Confirm Setup</button>
        </>
    )
}

export default Board