import logo from '../public/logo.png'
import githubLogo from '../public/github-logo.png'
import '../styles/navbar.scss'

export function Navbar() {
    
    return (
        <nav>
            <div className="container">

                <div id="logo-area">
                    <img src={logo} alt="" />

                    <p>HoursCalc</p>
                </div>

                <div id="creator-section">
                    <a rel="noreferrer" target="_blank" href="https://github.com/lcpsd">
                        <img src={githubLogo} alt="" />
                        <p>/lcpsd</p>
                    </a>
                </div>
            </div>
        </nav>
    )
}