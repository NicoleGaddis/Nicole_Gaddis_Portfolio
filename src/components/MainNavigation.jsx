import { NavLink } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" end>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" end>
                            Contact
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/projects" end>
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;