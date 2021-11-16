function Piece({type, collection, selected, handlePieces}) {

    function handleClick() {
        handlePieces(type)
    }

    return (
        <div onClick={handleClick} className="piece-container-card">
            {/* <h4>{piece} {piece.val ? ' (' + piece.val + ')' : null}</h4> */}
            <h4>{type}</h4>
            <p>{collection.length}</p>
        </div>
    )
}

export default Piece