function Piece({num, type}) {
    return (
        <div className="piece-container-card">
            <h4>{type}</h4>
            <p>{num}</p>
        </div>
    )
}

export default Piece