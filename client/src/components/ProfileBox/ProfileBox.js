import React from 'react';
import './ProfileBox.scss';

import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../reducers/authSlice';
import { logout } from '../../api/api';
import NavButton from '../NavButton/NavButton';
import { useNavigate } from 'react-router-dom';

const ProfileBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.currentUser);

    const handleLogout = async () => {
        await logout();
        dispatch(userLogout())
        navigate('/login');
    }

    return (
        <div className="profileBoxContainer">
            <div className="profileBoxContent">
                {currentUser ? <NavButton
                    children={`${currentUser?.user?.fullname}`}
                    fweight={600}
                    fsize={'10px'}
                    fcolor={'green'}
                    link={`/profile/:${currentUser?.user.fullname}`} /> : ''}
                <button className="logoutBtn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileBox;