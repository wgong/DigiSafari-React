import React from 'react'
import { useState } from 'react'

function FriendsList() {
    const [friends, setFriends] = useState(['John', 'Peter', 'Smith'])

    const addAlex = () =>{
        setFriends((friends)=> [...friends, "Alex"])
    }

    const removeAFriend = (index) => {
        setFriends((friends)=> friends.filter((f, i)=> i != index))
    }
  return (
    <div>
        <h3>Friends List</h3>
        <ol>
        {
            friends.map((friend, index)=> (<li key={index}>
                                                {friend}
                                            <button onClick={()=> { removeAFriend(index);}}>X</button>
                                            </li>)
                        )
        }
        </ol>
        <button onClick={addAlex}>Add Alex</button>
    </div>
  )
}

export default FriendsList