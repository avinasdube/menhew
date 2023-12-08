import React from 'react';
import './Welcome.scss';

import { Link } from 'react-router-dom';
import upright from '../../assets/icons/upright.png';

const Welcome = ({ wHeader, wSubHeader, wLink }) => {
  return (
    <div className="welcomeContainer">
      <header className="wheader">{wHeader}</header>
      <section className="wsubheader">{wSubHeader}</section>
      {wLink ? <div className="redirect">
        <Link to={wLink} className='link'><img src={upright} alt=''></img></Link>
      </div> : ''}
    </div>
  )
}

export default Welcome;