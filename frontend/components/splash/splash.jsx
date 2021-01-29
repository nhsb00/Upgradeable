import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';

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
                <div className="splash-image">
                    <div className="splash-text">
                        <h1>YOURS FOR THE MAKING</h1>
                        <p>Upgradeables is a community for people who like to make thins. Come explore, share, and make your next project with us!</p>
                    </div>
                </div>
                <div className="text">
                    <div>
                        <h2>STEP-BY-STEP</h2>
                        <p>We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</p>
                    </div>
                    <div>
                        <h2>MADE BY YOU</h2>
                        <p>Upgradeables are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</p>
                    </div>
                    <div>
                        <h2>A HAPPY PLACE</h2>
                        <p>Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.</p>
                    </div>
                </div>
                <div >
                     <ProjectIndexContainer />
                </div>
            </div>
        )
    }
}

export default Splash