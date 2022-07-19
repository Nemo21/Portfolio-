import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return ( <
        div className = "footer" >
        <
        div className = "socialMedia" >
        <
        a href = "https://www.instagram.com/_my_pseudonym/" > < InstagramIcon / > < /a> <
        a href = "https://twitter.com/KUUCH_BBHI" > < TwitterIcon / > < /a> <
        a href = "https://www.linkedin.com/in/bableen-saggu-5781a8229/" > < LinkedInIcon / > < /a> <
        p >
        <
        a href = "url" > 2022 portfolio.com < /a> <
        /p> <
        /div> <
        /div>
    )
}

export default Footer