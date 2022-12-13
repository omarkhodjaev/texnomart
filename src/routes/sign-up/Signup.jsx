import React ,{useState} from 'react';
import { auth ,provider} from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import { Link } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[possibleErr,setPossibleErr] =useState("");

    const createUser = (e) => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email,password)
        .then(response => {
            if(response){
                navigate("/")
                alert("Ro'yxatdan o'tdingiz");
            }
        } )
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
    <div className='container'>
        <form className='singup-wrapper' onSubmit={createUser} >
            <h1 className="signup-title" style={possibleErr?{color:"red"}:null}>Ro'yxatdan o'tish</h1>
            <input  type="email" placeholder="Email" onChange={e => {setEmail(e.target.value)}} />
            {possibleErr &&<h2 className='error-text'>{possibleErr}</h2>}
            <input  type="password" placeholder="Mahfiy so'z" required minLength={8} onChange={e => {setPassword(e.target.value)}} />
            <button className='signup-btn' type='submit'>Hisob Yaratish</button>
            <button  className='signup-go' onClick={signwithgoogle}>Google Hisob orqali kirish</button>
            <Link className='login-link' to="/login">Texnomart hisobingiz mavjudmi?</Link>    
        </form>
    </div>
  )
}

export default Signup