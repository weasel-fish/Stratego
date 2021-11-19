import {useNavigate} from 'react-router-dom'

function Home() {

    let navigate = useNavigate()

    function handleClick() {
        navigate('setup')
    }

    return (
        <div>
            <h1>Welcome to Weaselfish Stratego!</h1>
            <button onClick={handleClick}>Click Here to Get Started</button>
        </div>
    )
}

export default Home