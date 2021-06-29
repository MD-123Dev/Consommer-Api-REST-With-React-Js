
import React from 'react'
import '../navbar/navbar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-styl">
                <a className="navbar-brand" href="#">PostSite</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link nav-linksty" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar
