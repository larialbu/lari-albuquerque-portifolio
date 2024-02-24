import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
        Trabalhei em uma ampla gama de projetos. De aplicativos web, tanto frontend como backend. Aqui estão alguns dos meus projetos.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
          }
          <Divider />
          {toggle === 'front end' ?
            <ToggleButton active value="front end" onClick={() => setToggle('front end')}>Front end</ToggleButton>
            :
            <ToggleButton value="front end" onClick={() => setToggle('front end')}>Front end</ToggleButton>
          }
          <Divider />
          {toggle === 'back end' ?
            <ToggleButton active value="back end" onClick={() => setToggle('back end')}>Back end</ToggleButton>
            :
            <ToggleButton value="back end" onClick={() => setToggle('back end')}>Back end</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects