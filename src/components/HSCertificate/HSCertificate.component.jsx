import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import './HSCertificate.styles.scss';

import awsCer from '../../assets/awsCer.png'
import awsCer2 from '../../assets/awsCer2.png'
import mongoDBCer from '../../assets/mongodbCer.png'
import pythonCer from '../../assets/pythonCer.png'
import { Link } from "react-router-dom";

const HSCertificate = () => {
    
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-40%"]);
  
    return (
        <div ref={ref} className="scroll-container">
            <div className="sticky-container">
                <div>
                    <h1 className="scroll-heading">CERTIFICATES</h1>
                    <motion.div style={{ x }} className="motion-div">
                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={mongoDBCer} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>MongoDB Associate Developer</h1>
                                <h2>Issued By: MongoDB</h2>
                                <p>A developer using MongoDB with their application must possess the knowledge and skills necessary to utilize the database effectively. This means that they must have hands-on experience completing day-to-day operational tasks needed to use MongoDB.</p>
                                <Link 
                                    to="https://www.credly.com/earner/earned/badge/a246852f-b916-40d3-9d37-c15cf45a8e16"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <button>Credential</button>
                                </Link>
                            </div>
                        </div>
                    
                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={awsCer} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>AWS Certified Cloud Practitioner</h1>
                                <h2>Issued By: Amazon Web Service</h2>
                                <p>Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>
                                <Link 
                                    to="https://www.credly.com/badges/e9635f22-0d13-4ab1-9489-1a8dda359e93/public_url"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <button>Credential</button>
                                </Link>
                            </div>
                        </div>

                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={pythonCer} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>Certified Associate Python Programmer</h1>
                                <h2>Issued By: Python Institute</h2>
                                <p>Earners of the PCAP – Certified Associate Python Programmer badge demonstrate the ability to accomplish coding tasks related to the basics of programming in the Python language and the fundamental notions and techniques used in object-oriented programming. Becoming PCAP certified ensures that the individual is fully acquainted with all the primary means provided by Python 3 to enable her/him to start her/his own studies, and to open a path to the developer’s career.</p>
                                <Link 
                                    to="https://www.credly.com/badges/212632fe-4a3c-42ba-886a-1079f8e54d88"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <button>Credential</button>
                                </Link>
                            </div>
                        </div>

                        <div className="certificate-container">
                            <div className="cert-left">
                                <img className="cer-image" src={awsCer2} alt=""/>
                            </div>
                            <div className="cert-right">
                                <h1>AWS Certified Solutions Architect Associate</h1>
                                <h2>In Process</h2>
                                <p>Expected to get the certificate in March</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
  };

  export default HSCertificate;