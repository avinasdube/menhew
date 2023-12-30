import React, { useEffect } from 'react';                     
import './Dashboard.scss';
import AddProduct from '../../components/AddProductForm/AddProduct';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.auth.currentUser);

    // Check if the user is admin to conditionally render the Dashboard component
    const isAdmin = userDetails?.email === process.env.REACT_APP_ADMIN;

    useEffect(() => {
        // Redirect if the user is not admin
        if (!isAdmin) {
            navigate('/');
        }
    }, [isAdmin, navigate]); 

    if (!isAdmin) {
        return null; // Render nothing if not admin
    }

    return (
        <div className="dashboardContainer">
            <Navbar />
            <div className="dashBody">
                <div className="dashSidebar">
                    <div className="dashHeader">Admin Dashboard</div>
                    <div className="dashSubHeader">Menu</div>
                    <div className="menuBox">
                        <button className="menuBtn">Add Product</button>
                        <button className="menuBtn">Update Product</button>
                        <button className="menuBtn">Delete Product</button>
                    </div>
                </div>
                <div className="dashMain">
                    <AddProduct />
                </div>
            </div>
        </div>
    )
}

export default Dashboard