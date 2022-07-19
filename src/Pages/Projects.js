import React from 'react'
import ProjectsItem from '../Components/ProjectsItem';
import "../styles/Project.css"
import { ProjectList } from "../helpers/ProjectList.js"

function Projects() {
    return ( <
        div className = "projects" >
        <
        h1 > Projects < /h1> <
        div className = "projectList" > {
            ProjectList.map((project, idx) => {
                return <ProjectsItem key = { idx }
                id = { idx }
                name = { project.name }
                image = { project.image }
                />
            })
        } <
        /div> <
        /div>
    )
}

export default Projects;