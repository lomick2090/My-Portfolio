import { Link, Outlet } from "react-router-dom"
export default function Header() {

    return (
        <div>
            <ul className='menu'>
                <li>
                    <Link>HOME</Link>
                </li>
                <li>
                    <Link>PORTFOLIO</Link>
                </li>
                <li>
                    <Link>BIO</Link>
                </li>
                <li>
                    <Link>CONTACT</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}