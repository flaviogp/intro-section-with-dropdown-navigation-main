import TodoList from '../../../assets/images/icon-todo.svg'
import Calendar from '../../../assets/images/icon-calendar.svg'
import Reminders from '../../../assets/images/icon-reminders.svg'
import Planning from '../../../assets/images/icon-planning.svg'


import { MouseEvent, useState } from 'react'
import IconDown from '../../../assets/images/icon-arrow-down.svg'
import IconUp from '../../../assets/images/icon-arrow-up.svg'
import DropMenu from '../DropMenu';
import HeaderButtons from '../HeaderButtons'


const list ={
    features: [
        {desc:'Todo List', img: TodoList },
        {desc:'Calendar', img: Calendar },
        {desc:'Reminders', img: Reminders },
        {desc:'Planning', img: Planning },
    ],
    company: [
        {desc:'History'},
        {desc:'Our Team'},
        {desc:'Blog'},
    ],
} 

interface NavProps {
    menuActive: boolean
}
const Nav = ({menuActive}: NavProps) => {
    const[active, setActive] = useState({features: false, company: false});

    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        const elId = e.currentTarget.id;
        
        if(elId === 'features'){
            setActive({...active, features: !active.features})
        }else if(elId === 'company'){
            setActive({...active, company: !active.company})
        }
    }

    return(
        <nav className={menuActive ? 'menu-active' : 'menu-inactive'}>
            <div className='menu-flux'>


                <ul>
                    <li id="features" onClick={(e) => handleClick(e)}>
                        <div className="item-container">
                            <a href="#">Features</a>
                            <img src={!active.features ? IconDown : IconUp } alt="" />
                        </div>
                        {active.features && <DropMenu list={list.features} />}
                    </li>
                    <li id="company" onClick={(e) => handleClick(e) }>
                        <div className="item-container">
                            <a href="#" >Company</a>
                            <img src={!active.company ? IconDown : IconUp } alt="" />
                        </div>
                        {active.company && <DropMenu list={list.company} />}
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
                <HeaderButtons />
            </div>
        </nav>
    )
}

export default Nav