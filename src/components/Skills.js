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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

                                <img className="skill-picture" src={html} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={css} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={javascript} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={jquery} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={react} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={nodejs} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={express} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={mongodb} alt="Image" />
                            </div>
                            
                            <div className="item">

                                <img className="skill-picture" src={bootstrap} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={php} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={sql} alt="Image" />
                            </div>
                            <div className="item">

                                <img className="skill-picture" src={synfony} alt="Image" />
                            </div>
                        
                            
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
