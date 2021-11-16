function Piece({piece, setSelected}) {

    function handleSelect() {
        if(piece.num > 0) {
            setSelected(piece)
        }
    }


    return (
        <div onClick={handleSelect} className="piece-container-card">
            <h4>{piece.name} {piece.val ? ' (' + piece.val + ')' : null}</h4>
            <p>{piece.num}</p>
        </div>
    )
}

export default Piece