import {API_ROOT} from '../constants'
import { useEffect, useState } from 'react'
import cable from '../services/Cable'

function WSTest() {

    const [testState, setTestState] = useState([])

    useEffect(() => {
        loadStuffInitially()
        subscribeToChannel()
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

        cable.subscriptions.create({
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
                handleReceived(data)
                console.log('TestroomsChannel data received')
              }
            })
    }

    function handleReceived(data) {
        let newSet = [...testState]
        newSet.push(data)
        setTestState(newSet)
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
            {testState.map(test => <li>{test.name}</li>)}
        </div>
    )
}

export default WSTest