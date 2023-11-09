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
import whatsapp from './assets/follow/social-whats-app-svgrepo-com.svg'
import email from './assets/contact/2.svg'
import github from './assets/follow/GitHub.svg'
import linkedin from './assets/follow/linkedin-svgrepo-com.svg'
import javascript from './assets/tech/javascript-svgrepo-com.svg'
import typescript from './assets/tech/typescript-official-svgrepo-com.svg'
import node from './assets/tech/node-svgrepo-com.svg'
import mongo from './assets/tech/mongo-svgrepo-com.svg'
import html from './assets/tech/html-5-svgrepo-com.svg'
import css from './assets/tech/css-3-svgrepo-com.svg'
import react from './assets/tech/react-svgrepo-com.svg'
import jest from './assets/tech/jest-svgrepo-com.svg'
import bootstrap from './assets/tech/bootstrap-svgrepo-com.svg'
import java from './assets/tech/java-svgrepo-com.svg'
import angular from './assets/tech/angular-svgrepo-com.svg'
import sql from './assets/tech/sql-database-generic-svgrepo-com.svg'
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


  return (
    <Container fluid='sm' className=''>
      <Row >
        <Col sm={6} className='background-light'>
          <div>
            <ToggleButtonGroup type="radio" name="options" value={buttonValue} onChange={(value) => setButtonValue(value)} >
              <ToggleButton value={1} variant='light' id='tbn-bra'>
                <img src={langBrazil} className='btn-icons' alt="lang" />
              </ToggleButton>
              <ToggleButton value={2} variant='light' id='tbn-usa'>
                <img src={langUsa} className='btn-icons' alt="lang" />
              </ToggleButton>
            </ToggleButtonGroup>
            {
              buttonValue === 1 ?
                <div className='personal-info'>
                  <img alt='PHOTO' className='foto' src={foto} />
                  <h1 className=''>Gefferson T. Souza</h1>
                  <hr className='line' />
                  <p>
                    Desenvolvedor FULL-STACK
                  </p>
                  <div className='contact background'>
                    <div className=''>
                      <h6 className='title'>CONTATO</h6>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={house} />Goiânia, Goiás, Brasil</p>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={tel} /><a href='tel:5562994357455'>55(62)9 9435-7455</a></p>
                      <p className='px-2 descricao' ><img alt='icon' className='no-svg-icons' src={email} />geffersonteodorodesouza@gmail.com</p>
                      <hr />
                    </div>
                    <div className='follow-me'>
                      <h6 className='title'>REDES SOCIAIS</h6>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={github} /><a target="_blank" rel="noopener noreferrer" href="https://github.com/Gefferson-Souza">Gefferson-Souza | GitHub</a> </p>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={linkedin} /><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gefferson-teodoro-de-souza-322070269/'>Gefferson | Linkedin</a></p>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={whatsapp} /><a target="_blank" rel="noopener noreferrer" href='https://wa.me/5562994357455'>WhatsApp</a></p>
                      <hr />
                    </div>
                    <div className='bolder'>
                      <h6 className='title '>HABILIDADES</h6>
                      <Container fluid='sm'>
                        <Row>
                          <Col>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={javascript} /> JavaScript</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={html} /> HTML</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={css} /> CSS</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={mongo} /> MongoDB</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={jest} /> Jest tester</p>
                          </Col>
                          <Col>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={typescript} /> TypeScript</p>
                            <p className='px-2 descricao' ><img alt='icon' className='icons' src={node} /> Node</p>
                            <p className='px-2 descricao' ><img alt='icon' className='icons' src={angular} /> Angular</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={react} /> React</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={sql} /> SQL</p>
                          </Col>
                        </Row>
                      </Container>
                      <hr />
                    </div>
                    <div className=''>
                      <h6 className='title '>LINGUAS</h6>
                      <p className='px-2 descricao'><img alt='icon' className='icons' src={brazil} /> Português - Nativo</p>
                      <p className='px-2 descricao'><img alt='icon' className='icons' src={usa} /> Inglês - Avançado</p>
                      <p className='px-2 descricao' ><img alt='icon' className='icons' src={japan} /> Japonês - Básico</p>
                    </div>
                    <div className=''>
                      <h6 className='title '>HOBBIES</h6>
                      <p className='px-2 descricao'> Família - Música - Astronomia </p>
                      <p className='px-2 descricao'> Xadrez - Cozinhar - Ler </p>
                    </div>
                  </div>
                </div>
                :
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
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={tel} /><a href='tel:5562994357455'>55(62)9 9435-7455</a></p>
                      <p className='px-2 descricao' ><img alt='icon' className='no-svg-icons' src={email} />geffersonteodorodesouza@gmail.com</p>
                      <hr />
                    </div>
                    <div className='follow-me'>
                      <h6 className='title'>SOCIAL MEDIA</h6>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={github} /><a target="_blank" rel="noopener noreferrer" href="https://github.com/Gefferson-Souza">Gefferson-Souza | GitHub</a> </p>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={linkedin} /><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gefferson-teodoro-de-souza-322070269/'>Gefferson | LinkeDin</a></p>
                      <p className='px-2 descricao'><img alt='icon' className='no-svg-icons' src={whatsapp} /><a target="_blank" rel="noopener noreferrer" href='https://wa.me/5562994357455'>WhatsApp</a></p>
                      <hr />
                    </div>
                    <div className='bolder'>
                      <h6 className='title '>TECH SKILLS</h6>
                      <Container fluid='sm'>
                        <Row>
                          <Col>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={javascript} /> JavaScript</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={html} /> HTML</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={css} /> CSS</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={mongo} /> MongoDB</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={jest} /> Jest tester</p>
                          </Col>
                          <Col>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={typescript} /> TypeScript</p>
                            <p className='px-2 descricao' ><img alt='icon' className='icons' src={node} /> Node</p>
                            <p className='px-2 descricao' ><img alt='icon' className='icons' src={angular} /> Angular</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={react} /> React</p>
                            <p className='px-2 descricao'><img alt='icon' className='icons' src={sql} /> SQL</p>
                          </Col>
                        </Row>
                      </Container>
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
            }
          </div>
        </Col>
        {
          buttonValue === 1 ?
            <Col sm={6} className='background-light'>
              <div className='information pb-2'>
                <div className='about-me pt-2'>
                  <h4 className='bolder'><img src={personal} className='icons' alt="icon" /> Objetivo Profissional</h4>
                  <hr />
                  <p>
                    Como um Desenvolvedor Full Stack, estou determinado a conquistar uma posição desafiadora onde eu possa aplicar minha expertise em desenvolvimento de software e ampliar meu conjunto de habilidades.
                  </p>
                  <p>
                    Sou apaixonado por tecnologia e minha paixão reside na criação de interfaces de usuário altamente intuitivas e no desenvolvimento de APIs de alto desempenho.
                  </p>
                  <p>
                    Estou ansioso para enfrentar novos desafios que me permitam utilizar meu conhecimento na criação de aplicações web.
                  </p>
                  <p>
                    Meu objetivo principal é contribuir para uma equipe dinâmica e inovadora, onde eu possa continuar a minha jornada de aprendizado e evolução como profissional.
                  </p>
                </div>
                <div className='experience pt-4'>
                  <h4 className='bolder'><img src={suitcase} className='icons' alt="icon" />EXPERIÊNCIA / PROJETOS</h4>
                  <hr />
                  <div className='edu-exp pt-2'>
                    <h4><strong>Experiência</strong></h4>
                  </div>
                  <div className='project'>
                    <strong>Free Lancer --- Landing page</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/Gefferson-Portifolio'>Link do projeto: EMESTONE</a>
                    <br />
                    <small>Durante meu tempo com à EMESTONE, liderei o desenvolvimento de interfaces de usuário para uma
                      aplicação web. Trabalhei em estreita colaboração com as equipes de design para transformar
                      projetos de design em código front-end eficaz e atraente. Implementei práticas de desenvolvimento
                      responsivo para garantir uma experiência de usuário rica em detalhes para desktop e dispositivos
                      móveis. Além disso, otimizei o desempenho das páginas, reduzindo a carga e a velocidade de
                      carregamento. Realizei testes e depuração do código front-end para garantir qualidade e
                      funcionalidade. Também implementei boas práticas de SEO e acessibilidade.</small>
                  </div>
                  <div className='edu-exp pt-2'>
                    <h4><strong>Projetos Full-Stack</strong></h4>
                  </div>
                  <div className='project'>
                    <strong>Informações sobre os países e seu clima atual</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/Gefferson-Portifolio'>Link do projeto: Countries Info</a>
                    <br />
                    <small>Nota: O projeto foi implantado na Internet. O link de acesso pode ser encontrado no README.md</small>
                  </div>
                  <div className='project pt-3'>
                    <strong>Aplicativo de notas, CRUD, API REST. O usuário pode Criar, Editar, Excluir, Ler as Notas</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/Render-Teste/tree/master'>Link do projeto: Notes App Crud</a>
                    <br />
                    <small>Nota: O projeto foi implantado na Internet. O link de acesso pode ser encontrado no README.md</small>
                    <br />
                  </div>
                  <div className='project pt-3'>
                    <strong>API de lista de blogs, o usuário pode publicar novos blogs e ver o autor, título, curtidas e url de outros blogs</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/project-blogs-list'>Link do projeto: Lista de Blogs</a>
                    <br />
                  </div>
                  <div className='edu-exp pt-3'>
                    <h4><strong>Projetos React</strong></h4>
                  </div>
                  <div className='project'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/projetos-react'>Link dos projetos: Projetos React</a>
                    <br />
                    <small>Nota: Todos os projetos foram implantados na Internet. O link de acesso pode ser encontrado no README.md</small>
                  </div>
                </div>
                <div className='education pt-1'>
                  <h4 className='bolder'><img src={education} className='icons' alt="icon" /> FORMAÇÃO ACADÊMICA / CERTIFICAÇÕES</h4>
                  <hr />
                  <div className='edu-exp'>
                    <h5 className='weight'>Universidade Católica de Brasília</h5><h6>Jan 2023 - Dez 2024 (Cursando)</h6>
                  </div>
                  <strong>Curso: </strong><span>Análise e Desenvolvimento de Sistemas</span>
                  <br />
                  <div className='edu-exp pt-4'>
                    <h5>DIO</h5>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://web.dio.me/users/geffersonteodorodesouza/?tab=achievements&page=1'>
                    <strong>Cursos: </strong>
                    <br />
                    <span>Formação Angular Developer</span>
                    <br />
                    <span>Formação TypeScript Fullstack Developer</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>University of Helsinki</h5><h6>Jan 2023 - Março 2023</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/529f6c3b03c2728311f0f5a5260adda4'>
                    <strong>Curso: </strong>
                    <span>Full Stack Web Development (5 cr, CSM141081)</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Dez 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/0c1833adba55c6bf231f6181c6b93f06'>
                    <strong>Curso: </strong>
                    <span>Programming Foundations with JavaScript, HTML and CSS</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Dez 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/76183885ec9fd727b9d69bbc73a70304'>
                    <strong>Curso: </strong>
                    <span>Java Programming: Arrays, Lists, and Structured Data</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Dez 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/927e1f1c8ff6d456711726dbda56f26d'>
                    <strong>Curso: </strong>
                    <span>Java Programming: Solving Problems with Software</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Dez 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/43ce41c4b9d15e660aacff13fc4d2eca'>
                    <strong>Curso: </strong>
                    <span>Java Programming: Principles of Software Design</span>
                  </a>
                </div>
              </div>
            </Col>
            :
            <Col sm={6} className='background-light'>
              <div className='information'>
                <div className='about-me pt-2'>
                  <h4 className='bolder'><img src={personal} className='icons' alt="icon" /> ABOUT ME</h4>
                  <hr />
                  <p>
                    As a Full Stack Developer, I am determined to pursue a challenging position where I can apply my software development expertise and broaden my skill set.
                  </p>
                  <p>
                    I am passionate about technology and my passion lies in creating highly intuitive user interfaces and developing high-performance APIs.
                  </p>
                  <p>
                    I'm looking forward to facing new challenges that allow me to use my knowledge in creating web applications.
                  </p>
                  <p>
                    My main objective is to contribute to a dynamic and innovative team, where I can continue my journey of learning and evolution as a professional.
                  </p>
                </div>
                <div className='experience pt-3'>
                  <h4 className='bolder'><img src={suitcase} className='icons' alt="icon" /> EXPERIENCE / PROJECTS</h4>
                  <hr />
                  <div className='edu-exp pt-2'> <h4><strong>Experience</strong></h4> </div>
                  <div className='project'> <strong>Landing page --- Free Lancer</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/Gefferson-Portifolio'>Link: EMESTONE</a>
                    <br />
                    <small>During my time with EMESTONE, I led the development of user interfaces for a web application. I worked closely with design teams to transform design projects into effective and attractive front-end code. Implemented responsive development practices to ensure a richly detailed user experience for desktop and mobile devices. Additionally, I optimized page performance, reducing load and loading speed. Performed testing and debugging of front-end code to ensure quality and functionality. I also implemented good SEO and accessibility practices.</small>
                  </div>
                  <div className='edu-exp pt-2'>
                    <h4><strong>Full-Stack Projects</strong></h4>
                  </div>
                  <div className='project'>
                    <strong>Countries information and their current weather</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/Gefferson-Portifolio'>Link: Countrie Info</a>
                    <br />
                    <small>Note: The project was deployed on the Internet. Access link can be found at README.md</small>
                  </div>
                  <div className='project pt-3'>
                    <strong>Notes app, CRUD, API REST. The user can Create, Edit, Delete, Read the Notes</strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/Render-Teste/tree/master'>Link: Notes App</a>
                    <br />
                    <small>Note: The project was deployed on the Internet. Access link can be found at README.md</small>
                    <br />
                  </div>
                  <div className='project pt-3'>
                    <strong>Blog list API, the user can publish new Blogs and see other blogs author, title, likes and url </strong>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/project-blogs-list'>Link: Blog List</a>
                    <br />
                  </div>
                  <div className='edu-exp pt-4'>
                    <h4><strong>React projects</strong></h4>
                  </div>
                  <div className='project'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Gefferson-Souza/projetos-react'>Link: React Projects</a>
                    <br />
                    <small>Note: All projects were deployed on the Internet. Access link can be found on README.md</small>
                  </div>
                </div>
                <div className='education pt-1'>
                  <h4 className='bolder'><img src={education} className='icons' alt="icon" /> EDUCATION / CERTIFICATIONS</h4>
                  <hr />
                  <div className='edu-exp'>
                    <h5 className='weight'>Universidade Católica de Brasília</h5><h6>Jan 2023 - Dez 2024 (Studying)</h6>
                  </div>
                  <strong>Course: </strong><span>Analysis and systems development</span>
                  <br />
                  <small>University graduation</small>
                  <div className='edu-exp pt-4'>
                    <h5>DIO</h5>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://web.dio.me/users/geffersonteodorodesouza/?tab=achievements&page=1'>
                    <strong>Courses: </strong>
                    <br />
                    <span>Formação Angular Developer</span>
                    <br />
                    <span>Formação TypeScript Fullstack Developer</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>University of Helsinki</h5><h6>Jan 2023 - Mar 2023</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/529f6c3b03c2728311f0f5a5260adda4'>
                    <strong>Course: </strong>
                    <span>Full Stack Web Development (5 cr, CSM141081)</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Finished Dec 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/0c1833adba55c6bf231f6181c6b93f06'>
                    <strong>Course: </strong>
                    <span>Programming Foundations with JavaScript, HTML and CSS</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Finished Dec 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/76183885ec9fd727b9d69bbc73a70304'>
                    <strong>Course: </strong>
                    <span>Java Programming: Arrays, Lists, and Structured Data</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Finished Dec 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/927e1f1c8ff6d456711726dbda56f26d'>
                    <strong>Course: </strong>
                    <span>Java Programming: Solving Problems with Software</span>
                  </a>
                  <div className='edu-exp pt-4'>
                    <h5>Duke University</h5><h6>Finished Dec 2022</h6>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href='https://coursera.org/share/43ce41c4b9d15e660aacff13fc4d2eca'>
                    <strong>Course: </strong>
                    <span>Java Programming: Principles of Software Design</span>
                  </a>
                </div>

              </div>
            </Col>
        }
      </Row>
    </Container>
  )
}

export default App
