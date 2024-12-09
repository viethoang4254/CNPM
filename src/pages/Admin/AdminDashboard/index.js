import SidebarAdmin from '~/components/Layout/DefaultLayout/Sidebar-admin';
import NavbarAdmin from '~/components/Layout/DefaultLayout/navbar-admin';
import './AdminDashboard.scss';
function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <NavbarAdmin />
            <div className="admin-content">
                <SidebarAdmin />
            </div>
        </div>
    );
}

export default AdminDashboard;
