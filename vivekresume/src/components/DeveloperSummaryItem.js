import React from 'react';

class DeveloperSummaryItem extends React.Component {
    render() {
        return (
            <li>{this.props.summary.summaryText}</li>
        );
    }
}

export default DeveloperSummaryItem;
