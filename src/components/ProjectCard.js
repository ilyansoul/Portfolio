import { Col } from "react-bootstrap";
import { BsGithub } from 'react-icons/bs';
export const ProjectCard = ({ title, description, imgUrl , urlSite , urlGit }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="taille" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <div className="links-projects">
            <span><a href={urlSite}>Visite du site</a></span>          
            <span><a href={urlGit}><BsGithub/></a></span>          
            </div>
        </div>
      </div>
    </Col>
  )
}
