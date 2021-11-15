import Board from "./Board"
import PiecesContainer from './PiecesContainer'
import {useState} from 'react'

function Setup() {

    const [selected, setSelected] = useState(null)

    let pieceBank = {
        'Marshall (10)' : 1,
        'General (9)' : 1,
        'Colonel (8)' : 2,
        'Major (7)' : 3,
        'Captain (6)' : 4,
        'Lieutenant (5)' : 4,
        'Sergeant (4)' : 4,
        'Miner (3)' : 5,
        'Scout (2)' : 8,
        'Spy (1)' : 1,
        "Bomb" : 6,
        "Flag" : 1
    }


    return (
        <>
            <h1>Setup</h1>
            <div className='setup'>
                <PiecesContainer bank={pieceBank} setSelected={setSelected}/>
                <Board setSelected={setSelected}/>
            </div>
        </>
    )
}

export default Setup