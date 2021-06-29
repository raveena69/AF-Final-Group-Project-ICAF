import React from 'react';
import './css/Home.css';
import {Link} from "react-router-dom";
export default class Home extends React.Component {

    render() {
        return(
            <div>
                <div className="out-background">
                    {/*Top section start*/}
                    <div className="top-bar">
                    <div className="top-bar1">
                        {/*<img className="logo" src="./images/logo1.png"/>*/}
                        <div className="left">
                            <div className="conference-name">Welcome to International Conference on Application Frameworks [ICAF]</div>
                        </div>
                        <div className="right">
                            <div className="sign-up-back">
                                <div className="still-not-registered">Still not registered</div>
                                {/* <a href="/signUp" className="sign-up" target="_blanck">Sign up Now</a> */}
                                <Link to="/signUpMain" className="sign-up" target="_blanck">Sign up Now</Link>
                            </div>
                            <div className="sign-up-back">
                                <div className="already-registered">Already registered</div>
                                <Link to="/signInMain" className="sign-up" target="_blanck">Sign in Now</Link>
                            </div>
                            <div className="date-back">
                                <div className="dates">21st, 22nd and 23rd December 2021</div>
                                <div className="institute">Sri Lanka Institute of Information Technology</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/*Top section end*/}

                    {/*Middle section start*/}
                    <div className="about-conference-back">
                    <div className="about-conference-back1">
                        
                        <div className="about-conference">About Our Conference</div>
                        <div className="icaf-name">1st International Conference in Application Frameworks 2021 [ICAF]</div>
                        <div className="conference-para">The 1st International Conference on Application Frameworks [ICAF] is organized by the Faculty of Computing of the
                            Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals
                            to present the latest findings and research output and practical deployments in the Computer Science and Information
                            Technology domains. Primary objective of the ICAF is to uplift the research culture and the quality of research done

                            by Sri Lankan researchers. This conference will create a platform for national and international researchers to
                            showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work.
                            ICAF 2019 and ICAF 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all
                            publications are available in IEEE Xplore digital library.

                            <br/><br/>
                            December 21 - 23, 2021 in Sri Lanka Institute of Information Technology
                        </div>
                        
                    </div>
                    </div>

                    {/*Middle section end*/}

                    {/*Guest Speakers start*/}
                    <div className="guest-back">
                        <div className="guest-back1">
                            <div className="guest-speaker">Keynote Speakers</div>
                            <div className="person1">
                                <div className="person1-img"></div>
                                <div className="person1-content">PROF. Amelia Margaret <br/>
                                    Department of Software Engineering,<br/> Faculty of Science and Technology,<br/> London University.
                                </div>
                            </div>

                            <div className="person2">
                                <div className="person2-img"></div>
                                <div className="person1-content">PROF. George Smith <br/>
                                    Department of Information System,<br/> Faculty of Computing,<br/> University of Birmingham.
                                </div>
                            </div>

                            <div className="person3">
                                <div className="person3-img"></div>
                                <div className="person1-content">PROF. Thomas Wilson <br/>
                                    Department of Computer Science,<br/> Faculty of Information Technology,<br/> University of Texas At Austin.
                                </div>
                            </div>

                            <div className="person4">
                                <div className="person4-img"></div>
                                <div className="person1-content">Dr. Elizabeth Brown <br/>
                                    Department of Information Technology,<br/> Faculty of Science and Technology,<br/> Cornell University.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Guest Speakers End*/}

                    {/*Topics start*/}
                    <div className="topics-back">
                    <div className="topics-back1">
                        <div className="topics">Topics</div>
                        <ul className="topics-out">
                            <li className="topic">Intelligent Automation</li>
                            <li className="topic">AI and Decisioning</li>
                            <li className="topic">Low-Code Development</li>
                            <li className="topic">Operational Excellence</li>
                            <li className="topic">Cloud Computing</li>
                            <li className="topic">Robotic Process Automation</li>
                            <li className="topic">UX and Design</li>
                            <li className="topic">Digital Transformation</li>
                            <li className="topic">Latest Technologies</li>
                        </ul>
                    </div>
                    </div>

                    {/*Topics end*/}

                    {/*footer Start*/}

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

                {/*footer end*/}

                </div>

            </div>
        );
    }
};