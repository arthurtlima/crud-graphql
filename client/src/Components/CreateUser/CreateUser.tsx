import { useState } from 'react'
import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../../Graphql/Mutation';

export function CreateUser() {

    const [createUser, {error}] = useMutation(CREATE_USER);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="createUser">
          <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => {createUser(
            {variables: {name: name, username: username, password: password}}
          )}}>
            Create User
          </button>
        </div>
    )
}