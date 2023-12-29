

import { useEffect, useState } from 'react';


    
const Header =()=>{


    
    const SearchBar = () => {
      const [value, setValue] = useState('');
      const [suggestions, setSuggestions] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await fetch(
              `https://dummyjson.com/products/search?q=${value}`
            );
            
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [value]);
    
      return (
        <div className='search'>
          <input
            type="text"
            className='search-input'
            placeholder="Search data..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      );
    };
    
  const name = 'Login'
    const [buttonName, changeName] = useState(name)
    

    const toggle =()=>{
      
      let btnName = buttonName
      if(btnName ==='Login'){
       btnName = 'Logout'
        changeName(btnName)
        
      }
        else if(btnName==='Logout')
        {
          btnName = 'Login'
        changeName(btnName)
        }
    }
    return (
        <div className="header">
        <div>
            <img className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"/>
        </div>
        <div className="nav-items">
        <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Cart
                </li>
                <li>
                <button onClick={toggle}> {buttonName}</button>
                </li>
            </ul>
            
        </div>
            
            <div className="search-bar">
           <SearchBar/>
            </div>
        </div>
    )
}

export default Header;