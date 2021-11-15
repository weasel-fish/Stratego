function Piece({piece, setSelected}) {
    return (
        <div className="piece-container-card">
            <h4>{piece.name} {piece.val ? ' (' + piece.val + ')' : null}</h4>
            <p>{piece.num}</p>
        </div>
    )
}

export default Piece