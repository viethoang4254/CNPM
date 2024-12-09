import { Link } from 'react-router-dom';
import './navbar-admin.scss';
import { MdAdminPanelSettings } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
function navbarAdmin() {
    return (
        <div className="admin-nav">
            <nav>
                <ul>
                    <Link to="/">
                        <li>
                            <i>
                                <IoIosLogOut />
                            </i>
                            GO Back
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default navbarAdmin;
