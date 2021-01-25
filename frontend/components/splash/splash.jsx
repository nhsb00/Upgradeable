import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.projects
    }

    componentDidMount() {
        this.props.fetchAllProjects();
    }

    render () {
        return (
            <div className="splash">
                <div>
                    <h1>YOURS FOR THE MAKING</h1>
                    <p>Upgradeables is a community for people who like to make thins. Come explore, share, and make your next project with us!</p>
                </div>
            </div>
        )
    }
}

export default Splash