import React, {useReducer, useState} from 'react';

// EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
// PASSWORD_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]{8,255}$')
// USERNAME_REGEX = re.compile(r'^[a-zA-Z0-9._-]{2,255}$')
// NAME_REGEX = re.compile(r"^[A-Z]{1}[\w. '-]{1,254}$") 
let reName = new RegExp("^[A-Z]{1}[\w. '-]{1,254}$")
let reEmail = new RegExp("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")
let rePassword = new RegExp("^[a-zA-Z0-9.+_-]{8,255}$")
reName.test(form.firstName)

const UserForm = (props) => {
    const[form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const valid = {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    }

    const [state, dispatch] = useReducer(reducer, valid)

    const reducer = (valid, action) => {
        if(state.firstName !== reName.test(form.firstName)) {
            state.firstName = true;
        if(state.lastName !== reName.test(form.lastName)) {
            state.lastName = true
        if(state.email !== reName.test(form.email)) {
            state.email = true
        if(state.password !== reName.test(form.password)) {
            state.password = true
        }
        
    }
    // const[firstNameValid, setfirstNameValid] = useState(false)
    // const[firstNameValid, setfirstNameValid] = useState(false)
    // const[firstNameValid, setfirstNameValid] = useState(false)
    // const[firstNameValid, setfirstNameValid] = useState(false)
    // const[firstNameValid, setfirstNameValid] = useState(false)


    const onChangeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {form.firstName, form.lastName, form.email, form.password, form.confirmPassword};
        console.log("welcome", newUser.firstName)
    }


    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={ onChangeHandler } />
                </div>
                {firstName.length < 2 && firstName.length >0 ? <span>First Name must be at least 2 characters long</span>: ""}
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="firstName" onChange={ onChangeHandler } />
                </div>
                {lastName.length < 2 && lastName.length >0 ? <span>Last Name must be at least 2 characters long</span>: ""}
                <div>
                    <label>Email Address: </label>
                    <input type="email" name="firstName" onChange={ onChangeHandler } />
                </div>
                {email.length < 5 && email.length >0 ? <span>Email must be at least 5 characters long</span>: ""}
                <div>
                    <label>Password: </label>
                    <input type="password" name="firstName" onChange={ onChangeHandler } />
                </div>
                {password.length < 8 && password.length >0 ? <span>Password must be at least 8 characters long</span>: ""}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="firstName" onChange={ onChangeHandler } />
                </div>
                {confirmPassword !== password && confirmPassword.length >0 ? <span>Passwords do not match</span> : ""}
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