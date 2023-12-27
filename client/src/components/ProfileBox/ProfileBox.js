import React from 'react';
import './ProfileBox.scss';

import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../reducers/authSlice';
import { logout } from '../../api/api';
import NavButton from '../NavButton/NavButton';

const ProfileBox = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth.currentUser);

    const handleLogout = async () => {
        await logout();
        dispatch(userLogout(null))
    }

    return (
        <div className="profileBoxContainer">
            <div className="profileBoxContent">
                <NavButton
                    children={`${user.fullname}`}
                    fweight={600}
                    fsize={'10px'}
                    fcolor={'green'}
                    link={`/profile/:${user.fullname}`} />
                <button className="logoutBtn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileBox;