import React, {useState} from 'react'

const UserForm = (props) => {
    const[firstName, setFirstName] = useState("");

    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("welcome", newUser.firstName)
    }


    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                {firstName.length < 2 && firstName.length >0 ? <span>First Name must be at least 2 characters long</span>: ""}
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                {lastName.length < 2 && lastName.length >0 ? <span>Last Name must be at least 2 characters long</span>: ""}
                <div>
                    <label>Email Address: </label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {email.length < 5 && email.length >0 ? <span>Email must be at least 5 characters long</span>: ""}
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {password.length < 8 && password.length >0 ? <span>Password must be at least 8 characters long</span>: ""}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                {confirmPassword != password && confirmPassword.length >0 ? <span>Passwords do not match</span> : ""}
                <input type="submit" value="Create User" />
            </form>
            

            <p>Results</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>

        
    )
}

export default UserForm;