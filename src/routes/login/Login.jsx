import React, { useState } from 'react';
import { auth , provider} from '../../firebase/config';
import { Link , useNavigate } from 'react-router-dom';
import "./Login.css";


const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[possibleErr,setPossibleErr] = useState("");
  const navigate = useNavigate()
  
  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(response => {
      if(response){
        navigate("/")
        alert("Akkount muvafaqqiyatli kiritildi");
      }
    })
    
    .catch(err => setPossibleErr(err.message))
  }

  const signwithgoogle = () => {
    auth.signInWithPopup(provider)
    .then(response => {
      if(response){
        navigate("/")
        alert("Akkount muvafaqqiyatli kiritildi");
      }
    })
    .catch(err => setPossibleErr(err.message))
  }
  


  return (
    <div>
        <form className='login-wrapper' onSubmit={loginUser}>
            <h1 className="login-title" style={possibleErr?{color:"red"}:null}>Hisobga kirish</h1>
            {possibleErr &&<h2 className='error-text'>{possibleErr}</h2>}
            <input type="email" placeholder="Email" required onChange={e => {setEmail(e.target.value)}} />
            <input placeholder="Mahfiy so'z" type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}} />
            <button className='login-btn'  type='submit'>Kirish</button>
            <button  className='login-go' onClick={signwithgoogle}>Google Hisob orqali kirish</button>
            <Link className='sign-link' to="/signup">Hali ro'yxatdan o'tmaganmisiz?</Link>
        </form>
    </div>
  )
}

export default Login