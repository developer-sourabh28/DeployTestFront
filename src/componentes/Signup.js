import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState(null);

    const navigate = useNavigate();

   const UserSignup = async () => {
     try {
        await axios.post ('https://deploytestback.onrender.com/signup', 
            {name : name, email : email, password : password},
        )
           setName('');
           setEmail('');
           setPassword('');
           alert('User signed in')
           navigate('/login')
     } catch (error) {
        console.log({'signup error': error})
        setError('Failed to register user')
     }
   }
    
  return (
    <div>
        <h1>Signup</h1>
        {error && <p style={{color : 'red'}}>{error}</p>}
        <input
        type='text'
        value={name}
        placeholder='Enter Name'
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type='text'
        value={email}
        placeholder='Enter Email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type='text'
        value={password}
        placeholder='Enter Password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={UserSignup}>Signup</button>
    </div>
  )
}
