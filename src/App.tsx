import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import foto from './assets/foto.png';
import './index.css'
import house from './assets/contact/Vector.svg'
import tel from './assets/contact/1.svg'
import email from './assets/contact/2.svg'
import site from './assets/contact/3.svg'
import github from './assets/follow/GitHub.svg'
import linkedin from './assets/follow/Linkedin.svg'
import javascript from './assets/tech/javascript-svgrepo-com.svg'
import typescript from './assets/tech/typescript-official-svgrepo-com.svg'
import node from './assets/tech/node-svgrepo-com.svg'
import mongo from './assets/tech/mongo-svgrepo-com.svg'
import html from './assets/tech/html-5-svgrepo-com.svg'
import css from './assets/tech/css-3-svgrepo-com.svg'
import react from './assets/tech/react-svgrepo-com.svg'
import jest from './assets/tech/jest-svgrepo-com.svg'
import bootstrap from './assets/tech/bootstrap-svgrepo-com.svg'
import brazil from './assets/languages/flag-for-brazil-svgrepo-com.svg'
import usa from './assets/languages/united-states-of-america-united-states-svgrepo-com.svg'
import japan from './assets/languages/japan-svgrepo-com.svg'
import langBrazil from './assets/languages/brazil-svgrepo-com.svg'
import langUsa from './assets/languages/flag-us-svgrepo-com.svg'
import personal from './assets/descrition/personal.svg'
import suitcase from './assets/descrition/suitcase.svg'
import education from './assets/descrition/education.svg'


function App() {

  const [buttonValue, setButtonValue] = useState(1)

  console.log('button', buttonValue)


  return (
    <Container fluid='sm' className=''>
      <Row >
        <Col sm={6} className='abc'>
          <div>
            <ToggleButtonGroup type="radio" name="options" value={buttonValue} onChange={(value) => setButtonValue(value)} >
              <ToggleButton value={1} variant='light' id='tbn-bra'>
                <img src={langBrazil} className='btn-icons' alt="lang" />
              </ToggleButton>
              <ToggleButton value={2} variant='light' id='tbn-usa'>
                <img src={langUsa} className='btn-icons' alt="lang" />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='personal-info'>
            <img alt='PHOTO' className='foto' src={foto} />
            <h1 className=''>Gefferson T. Souza</h1>
            <hr className='line' />
            <p>
              FULL-STACK DEV
            </p>
            <div className='contact background'>
              <div className=''>
                <h6 className='title'>CONTACT</h6>
                <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={house} />Goiânia, Goiás, Brazil</p>
                <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={tel} /><a href='https://wa.me/5562994357455'>55(62)9 9435-7455</a></p>
                <p className='px-2 descricao' ><img alt='icon' className='no-svg-icons' src={email} />geffersonteodorodesouza@gmail.com</p>
                <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={site} />Goiânia, Goiás, Brazil</p>
                <hr />
              </div>
              <div className='follow-me'>
                <h6 className='title'>FOLLOW ME</h6>
                <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={github} /><a href="https://github.com/Gefferson-Souza">https://github.com/Gefferson-Souza</a> </p>
                <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={linkedin} /><a href='https://www.linkedin.com/in/gefferson-teodoro-de-souza-322070269/'>https://www.linkedin.com/in/geff...</a></p>
                <hr />
              </div>
              <div className='bolder'>
                <h6 className='title '>TECH SKILLS</h6>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={javascript} /> JavaScript</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={typescript} /> TypeScript</p>
                <p className='px-2 descricao' ><img alt='icon' className='icons' src={node} /> Node</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={mongo} /> MongoDB</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={html} /> HTML / CSS <img alt='icon' className='icons' src={css} /></p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={react} /> React</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={jest} /> Jest tester</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={bootstrap} /> Bootstrap</p>
                <hr />
              </div>
              <div className=''>
                <h6 className='title '>LANGUAGES</h6>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={brazil} /> Portuguese - Native</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={usa} /> English - Advanced</p>
                <p className='px-2 descricao' ><img alt='icon' className='icons' src={japan} /> Japanese - Basic</p>
              </div>
              <div className=''>
                <h6 className='title '>HOBBIES</h6>
                <p className='px-2 descricao'> Family - Music - Astronomy </p>
                <p className='px-2 descricao'> Chess - Cook - Read</p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} className='abc'>
          <div className='information'>
            <div className='about-me pt-2'>
              <h4 className='bolder'><img src={personal} className='icons' alt="icon" /> ABOUT ME</h4>
              <hr />
              <p>
                I'm a full-stack developer with experience building
                web applications using modern technologies and methodologies
                agile. I have knowledge in ReactJS, Redux, NodeJS, Express,
                MongoDB, Java, HTML, CSS, TypeScript and JavaScript.
                During my professional career, I had the opportunity to
                work on challenging projects, where I was able to learn a lot and
                apply my knowledge in a practical way. Also, I'm a
                proactive professional, communicative and always looking to be up to date
                with market news.
                My main achievements include the development of
                web applications that have improved the efficiency and experience of the
                user. I am committed to continuing to grow and learn.
                more and more.
                My ambition is to participate in projects and develop
                Innovative solutions. I'm always looking for new challenges and
                opportunities to expand my skills and knowledge,
                in order to become an even more qualified and valued professional
                no market
              </p>
            </div>

            <div className='education pt-3'>
              <h4 className='bolder'><img src={education} className='icons' alt="icon" /> EDUCATION / CERTIFICATIONS</h4>
              <hr />
              <div className='edu-exp'>
                <h5 className='weight'>Universidade Católica de Brasília</h5><h6>Jan 2023 - Studying</h6>
              </div>
              <strong>Course: </strong><span>Análise e Desenvolvimento de Sistemas</span>
              <br />
              <small>University graduation</small>
              <div className='edu-exp pt-4'>
                <h5>University of Helsinki</h5><h6>Jan 2023 - In Progress</h6>
              </div>
              <a href='https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/529f6c3b03c2728311f0f5a5260adda4'>
                <strong>Course: </strong>
                <span>Full Stack Web Development (5 cr, CSM141081)</span>
              </a>
              <div className='edu-exp pt-4'>
                <h5>Duke University</h5><h6>Finished Dec 2022</h6>
              </div>
              <a href='https://coursera.org/share/0c1833adba55c6bf231f6181c6b93f06'>
                <strong>Course: </strong>
                <span>Programming Foundations with JavaScript, HTML and CSS</span>
              </a>
              <div className='edu-exp pt-4'>
                <h5>Duke University</h5><h6>Finished Dec 2022</h6>
              </div>
              <a href='https://coursera.org/share/76183885ec9fd727b9d69bbc73a70304'>
                <strong>Course: </strong>
                <span>Java Programming: Arrays, Lists, and Structured Data</span>
              </a>
              <div className='edu-exp pt-4'>
                <h5>Duke University</h5><h6>Finished Dec 2022</h6>
              </div>
              <a href='https://coursera.org/share/927e1f1c8ff6d456711726dbda56f26d'>
                <strong>Course: </strong>
                <span>Java Programming: Solving Problems with Software</span>
              </a>
              <div className='edu-exp pt-4'>
                <h5>Duke University</h5><h6>Finished Dec 2022</h6>
              </div>
              <a href='https://coursera.org/share/43ce41c4b9d15e660aacff13fc4d2eca'>
                <strong>Course: </strong>
                <span>Java Programming: Principles of Software Design</span>
              </a>
            </div>
            <div className='experience pt-4'>
              <h4 className='bolder'><img src={suitcase} className='icons' alt="icon" /> EXPERIENCE / PROJECTS</h4>
              <hr />
              <div className='edu-exp pt-2'>
                <h4><strong>Full-Stack Projects</strong></h4>
              </div>
              <div className='project'>
                <strong>Countries information and their current weather</strong>
                <br />
                <a href='https://github.com/Gefferson-Souza/Gefferson-Portifolio'>https://github.com/Gefferson-Souza/Gefferson-Portifolio</a>
                <br />
                <small>Note: The project was deployed on the Internet. Access link can be found at README.md</small>
              </div>
              <div className='project pt-3'>
                <strong>Notes app, CRUD, API REST. The user can Create, Edit, Delete, Read the Notes</strong>
                <br />
                <a href='https://github.com/Gefferson-Souza/Render-Teste/tree/master'>https://github.com/Gefferson-Souza/Render-Teste/tree/master</a>
                <br />
                <small>Note: The project was deployed on the Internet. Access link can be found at README.md</small>
                <br />
                <small>Note: The back-end is finished, i'm working in the front-end</small>
              </div>
              <div className='project pt-3'>
                <strong>Blog list API, the user can publish new Blogs and see other blogs author, title, likes and url </strong>
                <br />
                <a href='https://github.com/Gefferson-Souza/project-blogs-list'>https://github.com/Gefferson-Souza/project-blogs-list</a>
                <br />
                <small>Note: The back-end is finished, i'm working in the front-end</small>
              </div>
              <div className='edu-exp pt-4'>
                <h4><strong>React projects</strong></h4>
              </div>
              <div className='project'>
                <strong>Some finished projects</strong>
                <br />
                <a href='https://github.com/Gefferson-Souza/projetos-react'>https://github.com/Gefferson-Souza/projetos-react</a>
                <br/>
                <small>Note: All projects were deployed on the Internet. Access link can be found on README.md</small>
              </div>
              <div className=' pt-4 pb-4'>
                <h4><strong>Bootstrap projects</strong></h4>
                <a href='https://github.com/Gefferson-Souza/BootStrap-projects'>https://github.com/Gefferson-Souza/BootStrap-projects</a>
                <br />
                <small>Note: All projects were deployed on the Internet. Access link can be found on README.md</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
