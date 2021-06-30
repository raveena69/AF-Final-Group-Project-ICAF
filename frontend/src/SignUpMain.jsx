import React from 'react';
import './css/SignUpMain.css';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

function SignUpMain() {
    return (
        <div>
            {/*Header Start*/}

            <NavBar />

            {/*Header End */}

            <div id="signUpMain-background">
                <div id="signUpMain-background1">

                    <Link id="link" to="/login">
                        <div id="customer-signUp">
                            <div className="admin-login">Admin Login</div>
                        </div>
                    </Link>

                    <Link id="link" to="/home">
                        <div id="admin-signUp">
                            <div className="admin-login">User Login</div>
                        </div>
                    </Link>

                    <Link id="link" to="/home">
                        <div id="admin-signUp">
                            <div className="admin-login">Reviewer Login</div>
                        </div>
                    </Link>

                    <Link id="link" to="/home">
                        <div id="admin-signUp">
                            <div className="admin-login">Editor Login</div>
                        </div>
                    </Link>

                </div>
            </div>

            {/*Footer Start*/}

            <div id="footer">
                    <div id="footer1">
                    
                        <div id="logo1"></div>

                        <div id="facts">
                            <div id="company-address">
                                SLIIT,
                                New Kandy Road,<br/>
                                Malabe,<br/>
                                Sri Lanka.<br/>

                                +94 11 7544806<br/>
                                info@icaf.lk<br/><br/>

                                © 2021 International Conference on Application Frameworks [ICAF] . All Rights Reserved.
                            </div>

                            <div id="social">
                                <a href="https://www.youtube.com/" target="_blank"><div id="youtube"></div></a>
                                <a href="https://www.facebook.com/" target="_blank"><div id="facebook"></div></a>
                                <a href="https://www.pinterest.com/" target="_blank"><div id="pinterest"></div></a>
                                <a href="https://twitter.com/login?lang=en" target="_blank"><div id="twitter"></div></a>
                                <a href="https://www.instagram.com" target="_blank"><div id="instagram"></div></a>
                            </div>

                        </div>
                    </div>
                </div>

            {/*Footer End*/}

        </div>
    );
}

export default SignUpMain;
