import {
  SiReact,
  SiJavascript,
  SiPython,
  SiFlask,
  SiMysql,
  SiHtml5,
  SiCss,
  SiGithub,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si'
import { FaDatabase, FaTools } from 'react-icons/fa'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <SiReact />,
      description: 'Modern interface development with responsive layouts and polished interaction.',
      skills: [
        { name: 'React JS', icon: <SiReact />, level: '95%' },
        { name: 'JavaScript', icon: <SiJavascript />, level: '92%' },
        { name: 'HTML5', icon: <SiHtml5 />, level: '92%' },
        { name: 'CSS3', icon: <SiCss />, level: '90%' },
      ],
    },
    {
      title: 'Backend',
      icon: <SiFlask />,
      description: 'Server-side architecture, APIs and secure data flows for reliable apps.',
      skills: [
        { name: 'Python', icon: <SiPython />, level: '92%' },
        { name: 'Flask', icon: <SiFlask />, level: '88%' },
        { name: 'Node.js', icon: <SiNodedotjs />, level: '82%' },
        { name: 'REST API', icon: <FaDatabase />, level: '86%' },
      ],
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      description: 'Structured backends and optimized queries for scalable data handling.',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: '88%' },
        { name: 'PostgreSQL', icon: <FaDatabase />, level: '80%' },
        { name: 'MongoDB', icon: <FaDatabase />, level: '78%' },
        { name: 'Redis', icon: <FaDatabase />, level: '75%' },
      ],
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      description: 'Developer workflows and collaboration tools that speed up delivery.',
      skills: [
        { name: 'GitHub', icon: <SiGithub />, level: '90%' },
        { name: 'Git', icon: <SiGit />, level: '88%' },
        { name: 'VS Code', icon: <FaTools />, level: '90%' },
        { name: 'Chrome DevTools', icon: <FaTools />, level: '85%' },
      ],
    },
  ]

  return (
    <section id='skills' className='skills-section'>
      <div className='skills-header'>
        <p className='skills-tag'>Expertise</p>
        <h2>Skills</h2>
        <p className='skills-lead'>A curated set of frontend, backend and tooling skills used to build premium web experiences.</p>
      </div>

      <div className='skills-grid'>
        {skillCategories.map((category, index) => (
          <div className='skills-card' key={index}>
            <div className='skills-card-title'>
              <div className='skills-card-icon'>{category.icon}</div>
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>

            <div className='skills-list'>
              {category.skills.map((skill, skillIndex) => (
                <div className='skill-card' key={skillIndex}>
                  <div className='skill-card-top'>
                    <div className='skill-icon'>{skill.icon}</div>
                    <div className='skill-copy'>
                      <h4>{skill.name}</h4>
                      <span>{skill.level}</span>
                    </div>
                  </div>
                  <div className='skill-progress'>
                    <div className='skill-progress-bar' style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills