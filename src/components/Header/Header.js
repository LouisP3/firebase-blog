import React from 'react'
import './Header.css'
import {Link, useNavigate} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import {auth} from '../../config/firebaseConfig'
 import {useAuthState} from 'react-firebase-hooks/auth'
 import {signOut} from 'firebase/auth'

function Header() {

     //get user data
   const [user] = useAuthState(auth);
   console.log("user", user);

    //create array with topics
    const categories = ["Health", "Food", "Travel", "Technology"]
    let navigate = useNavigate()
  return (
    <div className='header-container'>
        <FaHome onClick={()=>navigate("/")}/>
        <div className='categories-container'>
            {
                categories.map(item => <Link to={`/category/${item}`} className="nav-link" >{item}</Link>)
            }

        </div>
        
        {
           user?
           <div>
             <span className="username">
               {user.displayName?user.displayName : user.email}
               </span>
             <button className="auth-link" onClick={()=>signOut(auth)}>Logout</button>
           </div>
           :
           <Link className="auth-link" to="/auth">Signup</Link>
         }
        </div>
  )
}

export default Header