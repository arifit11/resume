import React from 'react';
import DeveloperHeadline from './DeveloperHeadline';

class ResumeSummary extends React.Component {
    render() {
        return(
            <div>
                <div className="col-xs-8 col-sm-8 col-md-8 center">
                    <img src={this.props.userImage} className="img-responsive img-thumbnail img-circle" />
                </div>
                <h3 className="text-center dev-name">{this.props.developerName}</h3>
                <h5 className="text-center mar-b0">Senior Operations Engineer</h5>
                <br/>
            </div>
        );
    };
}

export default ResumeSummary;
