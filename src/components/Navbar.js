import React from 'react';

const MyNavbar = ({pageRefs}) => {
    return (
        <nav className="navbar-expand-md">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="btn-bg d-block d-md-none">
                        <div 
                            id="nav-icon4" 
                            className="navbar-toggle" 
                            data-toggle="collapse" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="nav" 
                            data-target=".navbar-collapse"
                        >
                        <span/>
                        <span/>
                        <span/>       
      	                </div>
                    </div>
                </div>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar__list">
                    {pageRefs.forEach(pageIdx => {
                        return (
                            <li className="navbar__list_li navbar__list_li_left">
                                {/* <a href={pageRefs[i][1]}>{pageRefs[i][0]}</a> */}
                                {pageRefs[0]}
                            </li>
                        );
                    })}

                    <li>
                        <div className="d-none d-md-block">
                            <img src="../items/navbar_img.png" alt="vertical flowers" width="100%"/>
                        </div>
                    </li>

                    <li>
                        <div className="d-block d-md-none">
                            <img src="../items/navbar_small_img.png" alt="horizontal flowers" width="100%"/>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MyNavbar;