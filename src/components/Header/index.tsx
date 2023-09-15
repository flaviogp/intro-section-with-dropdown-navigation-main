import {useState} from 'react'
import Brand from '../../assets/images/logo.svg'
import Nav from './Nav'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    
    const handleChange = () => {
        setMenuActive(!menuActive)
    }


    return(
        <header role="banner">
            <img src={Brand} alt="Brand" />
            <Nav menuActive={menuActive}/>   
            <label className="hamburguer-menu" htmlFor="hamburguer-menu">
                <input type="checkbox" name="" id="hamburguer-menu" onChange={() => handleChange()}/>
            </label>
        </header>
    )
}

export default Header