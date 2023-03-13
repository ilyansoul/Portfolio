import html from "../assets/img/html-5.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/java-script.png";
import bootstrap from "../assets/img/bootstrap.png";
import nodejs from "../assets/img/nodejs.png";
import mongodb from "../assets/img/mongodb.png";
import react from "../assets/img/structure.png";
import express from "../assets/img/express.png";
import jquery from "../assets/img/index.png";
import wordpress from "../assets/img/wordpress.png";
import php from "../assets/img/php.png";
import sql from "../assets/img/sql.png";
import synfony from "../assets/img/syn.png";
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <div className="skill-title">
                <h2 className="skl">Competences</h2>
                        <p className="sul">Voici que j'utulise au quotidien avec une specifite pour React , Express , NodeJs , MongoDb , Wordpress</p>
                        </div>
                    <div className="skill-bx wow zoomIn">
                   
                            <div className="item">

                                <img className="skill-picture" src={html} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={css} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={javascript} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={jquery} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={react} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={nodejs} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={express} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={mongodb} alt="yeah" />
                            </div>
                            
                            <div className="item">

                                <img className="skill-picture" src={bootstrap} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={php} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={sql} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={synfony} alt="yeah" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={wordpress} alt="yeah" />
                            </div>
                        
                            
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="yeah" />
    </section>
  )
}
