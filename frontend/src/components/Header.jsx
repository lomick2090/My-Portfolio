import { Link, Outlet } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
export default function Header() {

    return (
        <div>
            <ul className='menu'>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link>PORTFOLIO</Link>
                </li>
                <li>

                    <HashLink to='/#bio'>BIO</HashLink>

                </li>
                <li>
                    <Link>CONTACT</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}