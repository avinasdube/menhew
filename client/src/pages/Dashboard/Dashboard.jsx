import React from 'react';
import './Dashboard.scss';
import AddProduct from '../../components/AddProductForm/AddProduct';
import Navbar from '../../components/Navbar/Navbar';

const Dashboard = () => {
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