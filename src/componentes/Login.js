import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [vist, setVisit] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState(null);

    const navigate = useNavigate();

   const UserLogin = async () => {
     try {
        const loginUser = await axios.post ('https://deploytestback.onrender.com/login', 
            {email : email, password : password},
        )
        setVisit([...vist, loginUser.data])
           setEmail('');
           setPassword('');
           alert('User logged in')
           navigate('/visit')
     } catch (error) {
        console.log({'login error': error})
        setError('Failed to login user')
     }
   }
    
  return (
    <div>
        <h1>Signup</h1>
        {error && <p style={{color : 'red'}}>{error}</p>}
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
        <button onClick={UserLogin}>Login</button>
    </div>
  )
}
