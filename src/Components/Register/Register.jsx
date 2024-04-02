import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [conformpassword, setConformpassword] = useState('')
    const userDetails = {username, email, password}
    const [loading, setLoading] = useState(false)

    const usenavigate = useNavigate()

    const handleRegister = async(e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(userDetails)
        })
        // const data = await response.json()

        if(response.ok === true){
            usenavigate('/login')
        }
        if(response.ok === false){
            alert(`Email is Alredy Exists`)
        }
        
        }
        catch(e){
            console.log(e)
        }
        setLoading(false)
    }

    return (
        <div className='bg-register'>

            <h3>User Register</h3>
            <form onSubmit={handleRegister}>
                <div className='input-bg'>
                    <label>Username</label>
                    <input name='username' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='input-bg'>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='Email'  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-bg'>
                    <label>Password</label>
                    <input name='password' type='password' placeholder='Password'  onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <div className='input-bg'>
                    <label>Conformpassword</label>
                    <input name='conformpassword' type='password' placeholder='Conformpassword'  onChange={(e) => setConformpassword(e.target.value)} />
                </div> */}
                <button type='sumbit' className='btn btn-primary mt-4'>Register</button>
            </form>
            {loading && <h1>Loading...</h1>}

        </div>
    )
}

export default Register
