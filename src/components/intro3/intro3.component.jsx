import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import './intro3.styles.scss';

import awsCer from '../../assets/awsCer.png'
import mongoDBCer from '../../assets/mongodbCer.png'
import pythonCer from '../../assets/pythonCer.png'

const Intro3 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);
  
    return (
        <div ref={ref} className="scroll-container">
            <div className="sticky-container">
                <motion.h1 
                >
                    Certificates
                </motion.h1>
                <motion.div style={{ x }} className="motion-div">
                    <div className="certificate-container">
                        <img className="cer-image" src={mongoDBCer} alt=""/>
                    </div>
                    <div className="certificate-container">
                        <img className="cer-image" src={mongoDBCer} alt=""/>
                    </div>
                    <div className="certificate-container">
                        <img className="cer-image" src={mongoDBCer} alt=""/>
                    </div>
                    <div className="certificate-container">
                        <img className="cer-image" src={mongoDBCer} alt=""/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
  };

  export default Intro3;