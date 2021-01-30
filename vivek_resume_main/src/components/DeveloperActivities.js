import React from 'react';
import DeveloperActivitiesItem from './DeveloperActivitiesItem';

class DeveloperActivities extends React.Component {
    render() {
        return (
            <div>
                <h5 className="mar-t0">Activities</h5>
                <p className="small">
                {
                    this.props.developerActivities.map((activity) => {
                        return <DeveloperActivitiesItem activity={activity} key={activity.id} />
                    })
                }
                </p>
                <div className="clearfix"></div><br/>
            </div>
        );
    }
}

export default DeveloperActivities;
