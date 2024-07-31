import styles from './ProjectsStyles.module.css'
import fusely from '../../assets/fuselyapp.jpg'
import dayzer from '../../assets/dayzer.jpg'
import weather from '../../assets/meteoapp.jpg'
import bookstore from '../../assets/bookstore.jpg'
import tothetop from '../../assets/Thetop.png'
import quizz from '../../assets/quizz.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={fusely} link="https://github.com/OusskouBadr/Fusely.git" h3="Fusely" p='Dashboard Application '/>
            <ProjectCard src={weather} link="https://github.com/OusskouBadr" h3="Weather" p='Weather Application'/>
            <ProjectCard src={dayzer} link="https://github.com/OusskouBadr/Dayzer" h3="Dayzer" p='Task Management Dashboard'/>
            <ProjectCard src={bookstore} link="https://github.com/OusskouBadr/Bookstore" h3="Bookstore" p='Bookstore Application with MERN'/>
            <ProjectCard src={tothetop} link="https://github.com/OusskouBadr/Tothetop" h3="ToTheTop" p='Blog'/>
            <ProjectCard src={quizz} link="https://github.com/OusskouBadr/Quizzapp" h3="Quizz" p='Basic Quizz'/>
        </div>
    </section>
  )
}

export default Projects
