import Piece from "./Piece"
import {useState} from 'react'

function PiecesContainer({selected, setSelected}) {

    let  pieceBank = {
        Marshall: [{name : 'Marshall', val: 10}],
        General: [{name: 'General', val: 9}],
        Colonel: [{name: 'Colonel', val: 8}, {name: 'Colonel', val: 8}],
        Major: [{name: 'Major', val: 7}, {name: 'Major', val: 7}, {name: 'Major', val: 7}],
        Captain: [{name: 'Captain', val: 6}, {name: 'Captain', val: 6}, {name: 'Captain', val: 6}, {name: 'Captain', val: 6}],
        Lieutenant: [{name: 'Lieutenant', val: 5}, {name: 'Lieutenant', val: 5}, {name: 'Lieutenant', val: 5}, {name: 'Lieutenant', val: 5}],
        Sergeant: [{name: 'Sergeant', val: 4}, {name: 'Sergeant', val: 4}, {name: 'Sergeant', val: 4}, {name: 'Sergeant', val: 4}],
        Miner: [{name: 'Miner', val: 3}, {name: 'Miner', val: 3}, {name: 'Miner', val: 3}, {name: 'Miner', val: 3}, {name: 'Miner', val: 3}],
        Scout: [{name: 'Scout', val:2}, {name: 'Scout', val: 2}, {name: 'Scout', val: 2}, {name: 'Scout', val:2}, {name: 'Scout', val: 2}, {name: 'Scout', val: 2}, {name: 'Scout', val: 2}, {name: 'Scout', val: 2}],
        Bomb: [{name: 'Bomb', val: null}, {name: 'Bomb', val: null}, {name: 'Bomb', val: null}, {name: 'Bomb', val: null}, {name: 'Bomb', val: null}, {name: 'Bomb', val: null}],
        Flag: [{name: 'Flag', val: null}]
    }

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

    const [bankState, setBankState] = useState(pieceBank)

    function pickUpPiece(type) {
        let tempBank = {...bankState}
        setSelected(tempBank[type].pop())
        setBankState(tempBank)
    }

    function putPieceBack(type) {
        let tempBank = {...bankState}
        tempBank[type].push(pieceDictionary[type])
        setBankState(tempBank)
        setSelected(null)
    }

    function handlePieces(type) {
        if(selected == null) {
            pickUpPiece(type)
        } else if(selected.name == type) {
            putPieceBack(type)
        } else {
            putPieceBack(selected.name)
            pickUpPiece(type)
        }
    }

    let bankArray = Object.keys(bankState)
    console.log(bankArray)

    return (
        <div className="pieces">
            {bankArray.map(type => <Piece type={type} collection={bankState[type]} handlePieces={handlePieces} selected={selected}/>)}
        </div>
    )
}

export default PiecesContainer