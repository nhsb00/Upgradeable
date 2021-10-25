import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-list">
                    <div className="footer-img">
                        <img className="footer-instructables" src="https://www.instructables.com/assets/img/instructables-logo-v2.png" />
                    </div>
                    <div className="footer-contact">
                        <h1>Contact</h1>
                        <h3>Soobin Lim</h3>
                        <li>nhsb00@hotmail.com</li>
                        <li><a href="https://nhsb00.github.io/" target="_blank">Soobin Lim's Portfolio</a></li>
                    </div>
                    <div className="footer-link">
                        <h1>My Sites</h1>
                        <li><a href="https://www.linkedin.com/in/soobin-lim-2a47a2206/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/nhsb00/Upgradeable" target="_blank"><i className="fab fa-github"></i></a></li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;