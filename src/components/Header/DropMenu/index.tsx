
interface DropMenuProps {
 list: {desc: string, img?: string}[]
}


const DropMenu = ({list}: DropMenuProps) => {
    return(
        <div className={list.length > 3 ? 'menu-features drop-menu ' : 'menu-company drop-menu'}>
            {list.map(l => {
                return(
                    <li> 
                        {l.img && <img src={l.img} alt="" />}
                        <p>{l.desc}</p>
                    </li>
                )
                }
            )}
        </div>
    )
}

export default DropMenu;