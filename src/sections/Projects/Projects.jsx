import styles from './ProjectsStyles.module.css';
import OminoS from '../../assets/OminoS.png';
import Location from '../../assets/Location.png';
import ProjectCard from '../../common/ProjectCard';
import WeatherApp from '../../assets/Weather.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1> 
        <div className={styles.projectsContainer}>
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
          <ProjectCard 
          src={Location} 
          link="https://github.com/OmRana2004/REALTIME_TRACKER"
          h3="Location"
          p="Real Time Location Tracker"
          />
            </div> 
     </section>
  );
}

export default Projects
  