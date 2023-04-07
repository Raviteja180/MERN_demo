import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios';
function App() {
  const [name,setName]= useState("");
  const [password,setPassword]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4000/users',{"name":name,"password":password})
    .then((res)=>console.log(res));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name :</label>
      <input type="text"  onChange={(e)=>setName(e.target.value)}/>
      <label>Passoword</label>
      <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
      <button>Submit</button>
    </form>
  );
}

export default App;
