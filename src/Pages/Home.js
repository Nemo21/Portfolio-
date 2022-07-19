import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
    return ( <
            div className = "home" >
            <
            div className = "about" >
            <
            h2 > Hi, My Name is Bableen < /h2> <
            div className = "prompt" >
            <
            p > Learn And Create: ) < /p> <
        a href = "https://www.linkedin.com/in/bableen-saggu-5781a8229/"
    target = "_blank" > < LinkedInIcon / > < /a> <
        a href = "mailto:saggubableen9@gmail.com"
    target = "_blank" > < EmailIcon / > < /a> <
        a href = "https://github.com/Nemo21"
    target = "_blank" > < GithubIcon / > < /a> <
        /div> <
        /div> <
        div className = "skills" >
        <
        h1 > Skills < /h1> <
        ol className = "list" >
        <
        li className = "item" >
        <
        h2 > Front - End Technologies < /h2> <
        span > ReactJS, HTML, CSS, Bootstrap, MaterialUI, StyledComponents < /span> <
        /li> <
        li className = "item" >
        <
        h2 > Back - End Technologies < /h2> <
        span > Node, MySQL, MongoDB < /span> <
        /li> <
        li className = "item" >
        <
        h2 > Programming Languages < /h2> <
        span > JavaScript, Java, Python, C#, C++ < /span> <
        /li> <
        /ol> <
        /div> <
        /div>
)
}

export default Home;