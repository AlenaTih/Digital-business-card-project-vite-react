import photo from "../assets/Sunset.png"

function Info() {

    return (
        <div className="info-container">
            <img className="main-photo" src={photo} alt="The photo of Alena" />
            <div className="info-top">
                <h1>Alena Tikhomirova</h1>
                <h2>Frontend Developer</h2>
            </div>
            <div className="info-links">
                <a className="button-link email-link" href="mailto:alyonatihomirova9@gmail.com" target="_blank">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a className="button-link linkedin-link" href="https://www.linkedin.com/in/alenatikhomirova/"
                target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>                
            </div>
        </div>
    )
}

export default Info

/* <a className="website-link" href="https://alenatih.github.io/Coffee-Time-with-Me/" target="_blank">
                    Coffee Time with Me</a> */
