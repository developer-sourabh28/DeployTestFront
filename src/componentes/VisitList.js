import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function TodoList() {

    const [visits, setvisits] = useState([])
    const [place, setPlace] = useState('');
    const [memory, setMemory] = useState('');
    const [writter, setWritter] = useState('');
    const [error , setError] = useState(null);

    useEffect(() => {
      GetMemory();
    }, []);

   const CreateMemory = async () => {
     try {
        const response = await axios.post ('https://deploytestback.onrender.com/visit', 
            {place : place, memory : memory, writter : writter},
        )
          setvisits([...visits, response.data]);
           setPlace('');
           setMemory('');
           setWritter('');
           setError(null);
           alert('Todo Addded success');
     } catch (error) {
      console.log('Create Memory Error:', error);
        setError('Failed to Create Memory')
     }
   }

   const GetMemory = async () => {
    try {
       const response = await axios.get ('https://deploytestback.onrender.com/visit')
         setvisits(response.data);
    } catch (error) {
       setError('Failed to Create Memory');
       console.log('Get Memory Error:', error);
    }
  }
    
  return (
    <div>
        <h1>Visit</h1>
        {error && <p style={{color : 'red'}}>{error}</p>}
        <input
        type='text'
        value={place}
        placeholder='Enter Place'
        onChange={(e) => setPlace(e.target.value)}
        />
        <input
        type='text'
        value={memory}
        placeholder='Enter Memory'
        onChange={(e) => setMemory (e.target.value)}
        />
        <input
        type='text'
        value={writter}
        placeholder='Enter Writter'
        onChange={(e) => setWritter(e.target.value)}
        />
        <button onClick={CreateMemory}>Add</button>

        <ul>
    {visits.map(visit => (
        <li key={visit._id}>
           <span style={{fontWeight:'bold'}}>Place : </span> {visit.place} <br />
           <span style={{fontWeight:'bold'}}>Memory : </span> {visit.memory} <br />
           <span style={{fontWeight:'bold'}}>Writter : </span> {visit.writter} <br />
           <hr/>
        </li>
    ))}
</ul>

    </div>
  )
}
