import Space from './Space'
import WaterTile from './WaterTile'

function Board() {
    let spaces = []
    let waterTiles = [43, 44, 47, 48, 53, 54, 57, 58]
    for(let i = 1; i <= 100; i++) {
        if(waterTiles.includes(i)) {
            spaces.push('w' + i)
        } else {
            spaces.push(i)
        }
    }

    console.log(spaces)

    return (
        <div id='board'>
            {spaces.map(space => {
                if(typeof space != 'string') {
                    return <Space key={space} num={space > 60 ? `R${space - 60}`: space < 41 ? `B${space}` : space}/>
                } else {
                    return <WaterTile key={space}/>
                }
            })}
        </div>
    )
}

export default Board