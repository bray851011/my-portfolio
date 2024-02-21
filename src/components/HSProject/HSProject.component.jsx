import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './HSProject.styles.scss';
import { Link } from "react-router-dom";

import webdev from '../../assets/webdev.svg';
import stats from '../../assets/stats.svg';
import ios from '../../assets/ios.svg';
import pythonIcon from '../../assets/python.svg';
import swiftIcon from '../../assets/swift.svg';
import reactIcon from '../../assets/react.svg';
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import mongoDBIcon  from '../../assets/mongodb.svg';
import gitIcon from '../../assets/git.svg';
import fastAPIIcon  from '../../assets/fastapi.svg';
import qrcode from '../../assets/qrcode.jpg';

const HSProject = () => {
    
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["45%", "-35%"]);
  
    return (
        <div ref={ref} className="project-scroll-container">
            <div className="sticky-container">
                <div>
                    <h1 className="scroll-heading">Projects</h1>
                    <motion.div style={{ x }} className="motion-div">
                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={webdev} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>My Portfolio Website</h1>
                                <div className="icon-container">
                                    <h2>Tech Stack: </h2>
                                    <img className="icon" src={reactIcon} alt=""/>
                                    <img className="icon" src={htmlIcon} alt=""/>
                                    <img className="icon" src={cssIcon} alt=""/>
                                    <img className="icon" src={gitIcon} alt=""/>
                                </div>

                                <p >A portfolio website that presents a brief summary of my previous achievements and current projects. This site is hosted on GitHub and built using JavaScript, HTML, and CSS. It serves to share my basic details and demonstrate my proficiency in front-end development.</p>
                                
                                <div className="button-container">
                                    <Link 
                                        to="/"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button>Visit</button>
                                    </Link>
                                    <Link 
                                        to="https://github.com/bray851011/my-portfolio"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button>GitHub Repo</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={stats} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>Swim Stats</h1>
                                <div className="icon-container">
                                    <h2>Tech Stack: </h2>
                                    <img className="icon" src={reactIcon} alt=""/>
                                    <img className="icon" src={htmlIcon} alt=""/>
                                    <img className="icon" src={cssIcon} alt=""/>
                                    <img className="icon" src={pythonIcon} alt=""/>
                                    <img className="icon" src={mongoDBIcon} alt=""/>
                                    <img className="icon" src={fastAPIIcon} alt=""/>
                                    <img className="icon" src={gitIcon} alt=""/>
                                </div>

                                <p >
                                A website designed for a swimming team to access swimmers' historical results and analyze their performance through charts. This site employs React for front-end development, FastAPI as the backend framework, and MongoDB for database management.</p>
                                
                                <div className="button-container">
                                    <Link 
                                        to="https://github.com/bray851011/team-seal"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button>GitHub Repo</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>

                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={ios} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>Tipwise - Tip Calculator</h1>
                                <div className="icon-container">
                                    <h2>Tech Stack: </h2>
                                    <img className="icon" src={swiftIcon} alt=""/>
                                    <img className="icon" src={gitIcon} alt=""/>
                                </div>

                                <p>An iOS app developed using Swift and Xcode, integrating with Google Admob for revenue. This app calculates tip percentages based on bill amounts, enables screenshots and sharing, and is currently available on the App Store.</p>
                                
                                <div className="button-container">
                                    <img className="qrcode" src={qrcode} alt=""/>
                                </div>
                                
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
  };

  export default HSProject;