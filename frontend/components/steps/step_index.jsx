import React from 'react';
import StepIndexItem from './step_index_item';


class StepIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        debugger
        this.props.fetchAllSteps(this.props.projectIid);
    }

    render() {
        if (!steps) return null;

        const { steps, updateStep, deleteStep } = this.props;

        debugger

        return (
            <div>
                <ul>
                    {
                        steps.map(step => (
                            <StepIndexItem
                                step={ step }
                                updateStep={ updateStep }
                                deleteStep={ deleteStep }
                                key={step.id}
                            />
                        ))
                    }
                </ul>
            </div>
        );

    }
}

export default StepIndex;