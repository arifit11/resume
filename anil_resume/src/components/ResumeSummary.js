import React from 'react';
import DeveloperHeadline from './DeveloperHeadline';
import DeveloperInfo from './DeveloperInfo';
import DeveloperSummary from './DeveloperSummary';
import DeveloperActivities from './DeveloperActivities';
import DeveloperLanguages from './DeveloperLanguages';
import DeveloperExtraDetails from './DeveloperExtraDetails';

class ResumeSummary extends React.Component {
    render() {
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 grey-back pad-15 round-10">
                <DeveloperHeadline userImage = {this.props.userImage} developerName = {this.props.developerName} />
                <DeveloperInfo developerInfo = {this.props.developerInfo} />
                <DeveloperSummary developerSummary = {this.props.developerSummary} />
                <DeveloperActivities developerActivities = {this.props.developerActivities} />
                <DeveloperLanguages developerLanguages = {this.props.developerLanguages} />
                <DeveloperExtraDetails />
            </div>
        );
    };
}

export default ResumeSummary;
