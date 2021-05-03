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
                    </div>
                    <div className="footer-link">
                        <h1>My Sites</h1>
                        <a href='https://github.com/nhsb00'><i className="fab fa-github"></i>GitHub</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;