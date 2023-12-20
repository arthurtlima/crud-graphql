import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../../Graphql/Mutation"

function UpdatePassword() {

    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD);

    return (
        <div>
            <input type="text" placeholder="Username..." onChange={(event) => {
                setUsername(event.target.value)
            }} />
            <input type="text" placeholder="Current password..." onChange={(event) => {
                setCurrentPassword(event.target.value)
            }} />
            <input type="text" placeholder="New password..."  onChange={(event) => {
                setNewPassword(event.target.value)
            }} />
            <button onClick={() => updatePassword({
                    variables: { 
                        username: username, 
                        oldPassword: currentPassword, 
                        newPassword: newPassword
                    }})}
            >
            UPDATE PASSWORD</button>
        </div>
    )
}

export default UpdatePassword