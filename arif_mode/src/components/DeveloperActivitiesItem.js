import React from 'react';

class DeveloperActivitiesItem extends React.Component {
    render() {
        return (
            <span>{this.props.activity.activity}<br/></span>
        );
    }
}

export default DeveloperActivitiesItem;
