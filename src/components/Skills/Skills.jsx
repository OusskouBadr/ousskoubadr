import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="Javascript"/>
        <SkillList src={checkMarkIcon} skill="PHP"/>
        <SkillList src={checkMarkIcon} skill="TypeScript"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Node"/>
        <SkillList src={checkMarkIcon} skill="Express"/>
        <SkillList src={checkMarkIcon} skill="MongoDB"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        <SkillList src={checkMarkIcon} skill="Styled components"/>
        <SkillList src={checkMarkIcon} skill="SCSS/SASS"/>
        <SkillList src={checkMarkIcon} skill="CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Postman"/>
        <SkillList src={checkMarkIcon} skill="Firebase"/>
        <SkillList src={checkMarkIcon} skill="GitHub"/>
        <SkillList src={checkMarkIcon} skill="Docker" />
      </div>
    </section>
  );
}

export default Skills;