import React from 'react';

const Header = ({title}) => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a href="#!" className="brand-logo">{title}</a>
                </div>
            </nav> 
        </div>
    );
}
 
export default Header;