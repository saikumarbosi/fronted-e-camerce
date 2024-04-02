import React, { useEffect } from 'react'
import { useState } from 'react'
import './Login.css'
import { useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userDetails = {email, password}
    const [loading, setLoading] = useState(false)

    const usenavigate = useNavigate()

    const onSubmitSuccess = token => {
        Cookies.set("jwt", token, { expires: 30 })
    }

    useEffect(() => {
        const jwtToken = Cookies.get("jwt")
        if (jwtToken !== undefined) {
           usenavigate('/')  
        }
    })
    const handlelogin = async(e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await fetch("https://backend-e-camerce.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(userDetails)
        })

        // const data = await response.json()
        // console.log(data)

        if(response.ok === true){
            onSubmitSuccess(await response.json().token)
        }
        if(response.ok === false){
            alert("Email or Password Not Found")
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
            <form onSubmit={handlelogin}>
                <div className='input-bg'>
                    <label>Email</label>
                    <input className='form-controle' name='email' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input-bg'>
                    <label>Password</label>
                    <input className='form-controle' name='password' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary mt-4'>Login</button>
            </form>
            {loading && <h1>Loading...</h1>}
        </div>
  )
}

export default Login