import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
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
import langBrazil from './assets/languages/flag-for-brazil-svgrepo-com.svg'
import langUsa from './assets/languages/flag-us-svgrepo-com.svg'
import personal from './assets/descrition/personal.svg'
import suitcase from './assets/descrition/suitcase.svg'
import education from './assets/descrition/education.svg'

function App() {

  return (
    <Container fluid='sm' className=''>
      <Row >
        <Col sm={6} className='abc'>
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
                <p className='px-2 descricao'><img alt='icon' className='icons' src={brazil} /> Portuguese - Nativo</p>
                <p className='px-2 descricao'><img alt='icon' className='icons' src={usa} /> English - Advanced</p>
                <p className='px-2 descricao' ><img alt='icon' className='icons' src={japan} /> Japanese - Basic</p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} className='abc'>
          <div className='information'>
            <div>
              <button><img src={langBrazil} className='icons' alt="lang" /></button>
              <button><img src={langUsa} className='icons' alt="lang" /></button>
            </div>
            <div className='about-me'>
              <h4 className=''><img src={personal} className='icons'alt="icon" /> ABOUT ME</h4>
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

            <div className='education'>
            <h4 className=''><img src={education} className='icons'alt="icon" /> EDUCATION</h4>
              <hr />
              <div className='title-education'>
                <h6>faculdade</h6> <p>Jan 2020 - Dez 2022</p>
              </div>
            </div>

            <div className='experience'>
            <h4 className=''><img src={suitcase} className='icons'alt="icon" /> EXPERIENCE</h4>
              <hr />
              <div className='title-education'>
                <h6>trabalho</h6> <p>Jan 2020 - Dez 2022</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
