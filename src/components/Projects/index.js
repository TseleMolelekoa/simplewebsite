import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div>
                <h1 className="heading">Projects</h1>
                <div className="projects-page">
                        <div className="component1"></div>
                        <div className="layer-small"></div>
                        <div className="Rectangle_6"></div>
                        <div className="Rectangle_5"></div>
                        <div className="Rectangle_4"></div>
                        <div className="Rectangle_3"></div>
                        <div className="Rectangle_2"></div>
                        <div className="shape1"></div>
                        <circle/>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="shape5"></div>
                        <div className="Rectangle1"></div>
                        <div className="Rectangle8"></div>
                        <div className="Rectangle9"></div>
                        <div className="Rectangle4"></div>
                        <circle/>
                        <div className="Rectangle6"></div>
                        <div className="shape15"></div>
                        <div className="projects-page">
                                <div className="cards-container">
                                        <motion.div className="card" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                                <h3>Tech Career website</h3>
                                        </motion.div>
                                        <motion.div className="card" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                                <h3>Banking App using Python</h3>
                                        </motion.div>
                                        <motion.div className="card" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                                <h3>Tax-Calculator using JAVA</h3>
                                        </motion.div>
                                </div>
                        </div>


                </div>
                <div className="gif-container">
                        <img src="src/components/assets/cogs-4218_512.gif" alt="GIF"/>
                </div>

        </div>
    );
};

export default Projects;
