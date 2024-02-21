import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './HSProject.styles.scss';
import { Link } from "react-router-dom";

import webdev from '../../assets/webdev.svg'
import pythonIcon from '../../assets/python.svg';
import javaIcon from '../../assets/java.svg';
import { ReactComponent as JavaScriptIcon } from '../../assets/javascript.svg';
import { ReactComponent as SwiftIcon } from '../../assets/swift.svg';
import { ReactComponent as CSharpIcon } from '../../assets/csharp.svg';
import { ReactComponent as NPMIcon } from '../../assets/npm.svg';
import reactIcon from '../../assets/react.svg';
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/mongodb.svg';
import { ReactComponent as PostgreSQLIcon } from '../../assets/postgresql.svg';
import { ReactComponent as AWSIcon } from '../../assets/aws.svg';
import gitIcon from '../../assets/git.svg';
import { ReactComponent as FastAPIIcon } from '../../assets/fastapi.svg';

const HSProject = () => {
    
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["15%", "-40%"]);
  
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
                                <p>A portfolio webpage encompassing a concise overview of my prior accomplishments and ongoing projects.</p>
                                <div className="button-container">
                                    <Link 
                                        to="https://www.credly.com/earner/earned/badge/a246852f-b916-40d3-9d37-c15cf45a8e16"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button>Credential</button>
                                    </Link>
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