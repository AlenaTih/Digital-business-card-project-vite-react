import twitterIcon from "../assets/twitter-icon.png"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import githubIcon from "../assets/github-icon.png"

function Footer() {
    return (
        <div className="footer-container">
            <a href="https://twitter.com/Alennushkaa" target="_blank">
                <i className="fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@alenaatikh" target="_blank">
                <i className="fa-brands fa-square-youtube"></i>
            </a>
            <a href="https://www.instagram.com/allennushkaa/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/AlenaTih" target="_blank">
                <i className="fa-brands fa-square-github"></i>
            </a>
        </div>
    )
}

export default Footer

/* <img src={twitterIcon} alt="Twitter icon" /> */
/* <img src={facebookIcon} alt="Facebook icon"/> */
/* <img src={instagramIcon} alt="Instagram icon"/> */
/* <img src={githubIcon} alt="Github Icon"/> */
