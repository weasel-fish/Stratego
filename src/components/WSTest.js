import {API_ROOT} from '../constants'
import { useEffect, useState } from 'react'
import cable from '../services/Cable'

function WSTest() {

    const [testState, setTestState] = useState([])

    useEffect(() => {
        loadStuffInitially()
        subscribeToChannel()

        return function unSub() {
            cable.disconnect()
        }
    }, []) 
    
    function loadStuffInitially() {
        fetch(`${API_ROOT}/tests`)
        .then(resp => resp.json())
        .then(setTestState)
    }

    function subscribeToChannel() {
        // cable.subscriptions.create({
        //     channel: 'TestroomsChannel'
        // })

        cable.subscriptions.create({ // save as variable to later unsub?
            channel: `TestroomsChannel`
            },
              {connected: () => {
                console.log('TestroomsChannel connected!')
              },
              disconnected: () => {
                console.log('TestroomsChannel disconnected!');
              },
              received: data => {
                // once the subscription is initiated
                // when the server is sent data it will
                // broadcast it out to the subscribers
                console.log(data)
                handleReceived(data)
                console.log('TestroomsChannel data received')
              }
            })
    }

    function handleReceived(data) {
        setTestState(prev => [...prev, data])
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        let name = e.target.name.value

        fetch(`${API_ROOT}/tests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name})
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' name='name'></input>
                <input type='submit'/>
            </form>
            {testState.map(test => <li key={test.id}>{test.name}</li>)}
        </div>
    )
}

export default WSTest