import Board from "./Board"
import PiecesContainer from './PiecesContainer'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Setup() {

    const [selected, setSelected] = useState(null)
    const [auto, setAuto] = useState(false)

    let pieceDictionary = 
    {
        Marshall: {
            name : 'Marshall',
            val: 10
        },
        General : {
            name: 'General',
            val: 9
        },
        Colonel: {
            name: 'Colonel',
            val: 8
        },
        Major: {
            name: 'Major',
            val: 7
        },
        Captain: {
            name: 'Captain',
            val: 6
        },
        Lieutenant: {
            name: 'Lieutenant',
            val: 5
        },
        Sergeant: {
            name: 'Sergeant',
            val: 4
        },
        Miner: {
            name: 'Miner',
            val: 3
        },
        Scout: {
            name: 'Scout',
            val: 2
        },
        Spy: {
            name: 'Spy',
            val: 1
        },
        Bomb: {
            name: 'Bomb',
            val: null
        },
        Flag: {
            name: 'Flag',
            val: null
        }
    }

    return (
        <>
            <h1>Setup</h1>
            <button onClick={() => setAuto(!auto)}>{auto ? 'Manual' :'Autofill'}</button>
            <p>You have selected: {selected ? selected.name : 'no piece'}</p>
            <div className='setup'>
                <PiecesContainer selected={selected} setSelected={setSelected} auto={auto} pieceDictionary={pieceDictionary}/>
                <Board setSelected={setSelected} selected={selected} auto={auto} pieceDictionary={pieceDictionary}/>
            </div>
        </>
    )
}

export default Setup