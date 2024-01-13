import React, { useState } from 'react'
import { Navigate, Redirect } from 'react-router-dom';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); 

    const handleLogin = (e) => {
        e.preventDefault()
        const hUsername = 'username';
        const hPassword = 'password';

        if (username === hUsername && password === hPassword) {
            alert('Login successful!');
            setLoggedIn(true);

        } else {
            alert('Invalid username or password. Please try again.');
        }

    };
    if (loggedIn) {
        return <Navigate to="/home" />;
      }
    return (
        <div className='loginPage'>
            <div className="header">
                <header style={{fontSize:'45px',color : 'blue', fontWeight: '100px'}}>Login</header>
                <div className="underline"></div>
            </div>



            <form>
                <div className="inputs">
                    <div className='username'>
                        <label className='usernametext'>Username:</label>
                        <input
                            placeholder='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className='password'>
                        <label className='passwordtext'>Password:</label>
                        <input
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className='loginButton'>
                        <button className='lbutton' onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>


            </form>


        </div>
    )
}
