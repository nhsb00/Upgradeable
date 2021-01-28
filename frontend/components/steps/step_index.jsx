import React from 'react';
import StepIndexItem from './step_index_item';


class StepIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchAllSteps(this.props.projectId);
    }

    render() {

        if (!this.props.steps) return null;

        const { steps, updateStep, deleteStep, projectId } = this.props;
        
        return (
            <div>
                <ul>
                    {
                        Object.values(steps).map(step => (
                            <StepIndexItem
                                step={ step }
                                updateStep={ updateStep }
                                deleteStep={ deleteStep }
                                key={step.id}
                                projectId={projectId}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default StepIndex;