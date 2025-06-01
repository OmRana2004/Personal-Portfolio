import styles from './ProjectsStyles.module.css';
import Trekify from '../../assets/Trekify.png';
import OminoS from '../../assets/OminoS.png';
import ProjectCard from '../../common/ProjectCard';
import WeatherApp from '../../assets/Weather.png';



function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1> 
        <div className={styles.projectsContainer}>
          <ProjectCard 
          src={Trekify} 
          link="https://github.com/OmRana2004/Trekify"
          h3="Trekify"
          p="Trekify "
          />
          <ProjectCard 
          src={OminoS} 
          link="https://github.com/OmRana2004/Pizza-App"
          h3="OminioS"
          p="Pizza Divelery App"
          />
          <ProjectCard 
          src={WeatherApp} 
          link="https://weather-app-smoky-nine-16.vercel.app/"
          h3="Weather App"
          p="Weather App"
          />
            </div> 
     </section>
  );
}

export default Projects
  