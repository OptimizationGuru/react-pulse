
import {  useState } from 'react';
import { Link } from 'react-router-dom';



    
const Header =()=>{
    
    const name = 'Login'
    const [buttonName, changeName] = useState(name)
    

    const toggle =()=>{
        buttonName === 'Login' ?  btnName = 'Logout' : btnName = 'Login'
        changeName(btnName)
    }
    return (
        <div className="header">
        <div>
            <img className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"/>
        </div>
        <div className="nav-items">
        <ul>
                <li>
                   <Link to="/" >Home</Link> 
                </li>
                <li>
                <Link to="/about" >About</Link>
                </li>
                <li>
                <Link to="/contact" > Contact Us</Link>
                </li>
                <li>
                    Cart
                </li>
                <li>
                <button onClick={toggle} className="btn-name" > {buttonName}</button>
                </li>
            </ul>
            
        </div>
            
           
        </div>
    )
}

export default Header;