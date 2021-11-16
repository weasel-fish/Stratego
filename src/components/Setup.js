import Board from "./Board"
import PiecesContainer from './PiecesContainer'
import {useState} from 'react'

function Setup() {

    const [selected, setSelected] = useState(null)
    const [readyCount, setReadyCount] = useState(40)

    function handleConfirm() {
        console.log('I do nothing right now')
    }

    return (
        <>
            <h1>Setup</h1>
            <p>You have selected: {selected ? selected.name : 'no piece'}</p>
            <div className='setup'>
                <PiecesContainer selected={selected} setSelected={setSelected} readyCount={readyCount} setReadyCount={setReadyCount}/>
                <Board setSelected={setSelected} selected={selected}/>
            </div>
            <button disabled={readyCount != 0} onClick={handleConfirm}>Confirm Setup</button>
        </>
    )
}

export default Setup