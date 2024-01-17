import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    const layoutStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const contentStyle = {
        flexGrow: 1,
        padding: '20px',
        marginTop: '80px', 
    };

    return (
        <div style={layoutStyle}>
            <Navbar />
            <div style={contentStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
