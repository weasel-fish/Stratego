import Board from "./Board"
import PiecesContainer from './PiecesContainer'
import {useState} from 'react'

function Setup() {

    let pieceBank = 
    {
        Marshall: {
            name : 'Marshall',
            num : 1,
            val: 10
        },
        General : {
            name: 'General',
            num: 1,
            val: 9
        },
        Colonel: {
            name: 'Colonel',
            num: 2,
            val: 8
        },
        Major: {
            name: 'Major',
            num: 3,
            val: 7
        },
        Captain: {
            name: 'Captain',
            num: 4,
            val: 6
        },
        Lieutenant: {
            name: 'Lieutenant',
            num: 4,
            val: 5
        },
        Sergeant: {
            name: 'Sergeant',
            num: 4,
            val: 4
        },
        Miner: {
            name: 'Miner',
            num: 5,
            val: 3
        },
        Scout: {
            name: 'Scout',
            num: 8,
            val: 2
        },
        Spy: {
            name: 'Spy',
            num: 1,
            val: 1
        },
        Bomb: {
            name: 'Bomb',
            num: 6,
            val: null
        },
        Flag: {
            name: 'Flag',
            num: 1,
            val: null
        }
    }
        // [
        //     {
        //         name : 'Marshall',
        //         num : 1,
        //         val: 10
        //     },
        //     {
        //         name: 'General',
        //         num: 1,
        //         val: 9
        //     },
        //     {
        //         name: 'Colonel',
        //         num: 2,
        //         val: 8
        //     },
        //     {
        //         name: 'Major',
        //         num: 3,
        //         val: 7
        //     },
        //     {
        //         name: 'Captain',
        //         num: 4,
        //         val: 6
        //     },
        //     {
        //         name: 'Lieutenant',
        //         num: 4,
        //         val: 5
        //     },
        //     {
        //         name: 'Sergeant',
        //         num: 4,
        //         val: 4
        //     },
        //     {
        //         name: 'Miner',
        //         num: 5,
        //         val: 3
        //     },
        //     {
        //         name: 'Scout',
        //         num: 8,
        //         val: 2
        //     },
        //     {
        //         name: 'Spy',
        //         num: 1,
        //         val: 1
        //     },
        //     {
        //         name: 'Bomb',
        //         num: 6,
        //         val: null
        //     },
        //     {
        //         name: 'Flag',
        //         num: 1,
        //         val: null
        //     }
        // ]

    const [bankState, setBankState] = useState(pieceBank)
    const [selected, setSelected] = useState(null)

    console.log(selected)


    return (
        <>
            <h1>Setup</h1>
            <p>You have selected: {selected?.name}</p>
            <div className='setup'>
                <PiecesContainer bank={bankState} setSelected={setSelected}/>
                <Board setSelected={setSelected} selected={selected} setBankState={setBankState} bankState={bankState}/>
            </div>
        </>
    )
}

export default Setup