import {useState} from 'react'

function Space({num}) {
    const [occupant, setOccupant] = useState(null)
    return (
        <div className="space">
            <p>{num}</p>
        </div>
    )
}

export default Space