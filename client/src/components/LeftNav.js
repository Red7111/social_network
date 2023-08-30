import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    return (
        <div>
            <div className="left-nav-container">
                <div className="icons">
                    <div className="icons-bis">
                        <NavLink to="/" exact activeClassName="active-left-nav">
                            <img src="./img/icons/home.svg" alt="Accueil"/>
                        </NavLink>
                        <br/>
                        <NavLink to="/trending" exact activeClassName="active-left-nav">
                            <img src="./img/icons/rocket.svg" alt="Posts récents"/>
                        </NavLink>
                        <br/>
                        <NavLink to="/profil" exact activeClassName="active-left-nav">
                            <img src="./img/icons/user.svg" alt="Profil utilisateur"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;