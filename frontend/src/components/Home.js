import {useNavigate} from 'react-router-dom'
import WSTest from './WSTest'

function Home() {

    let navigate = useNavigate()

    function handleClick() {
        navigate('setup')
    }

    return (
        <div>
            <h1>Welcome to Weaselfish Stratego!</h1>
            <button onClick={handleClick}>Click Here to Get Started</button>
            <WSTest />
        </div>
    )
}

export default Home