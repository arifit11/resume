import React from 'react';
import DeveloperSummaryItem from './DeveloperSummaryItem';

class DeveloperSummary extends React.Component {
    render() {
        return (
            <div>
                <div className="clearfix"></div>
                <div className="bot-3"></div><br/>
                <h5 className="mar-t0">Summary</h5>
                <ul className="list-unstyled re-ul small">
                {
                    this.props.developerSummary.map((summary) => {
                        return <DeveloperSummaryItem summary={summary} key={summary.id} />
                    })
                }
                </ul>
                <div className="clearfix"></div><br/>
            </div>
        );
    }
}

export default DeveloperSummary;
