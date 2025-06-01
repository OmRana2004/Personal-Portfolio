import styles from './ProjectsStyles.module.css';
import Trekify from '../../assets/Location.png';
import OminoS from '../../assets/OminoS.png';
import WeatherApp from '../../assets/Weather.png';
import ProjectCard from '../../common/ProjectCard';



function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1> 
        <div className={styles.projectsContainer}>
          <ProjectCard 
          src={Trekify} 
          link="https://github.com/OmRana2004/Trekify"
          h3="Trekify"
          p="Trekify is a Treking and Hiking App that helps you find the best trails and plan your next adventure."
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
  