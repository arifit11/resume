import React from 'react';
import DeveloperSkillSet from './DeveloperSkillSet';
import DeveloperWorkExperience from './DeveloperWorkExperience';
import DeveloperAchievements from './DeveloperAchievements';

class ResumeExperience extends React.Component {
    render() {
        return(
            <div className="col-xs-8 col-sm-8 col-md-8 pad-15 pad-r0">
                <DeveloperSkillSet skillSetHeading='SAP Skills' skills={this.props.developmentSkills} />
                <DeveloperSkillSet skillSetHeading='Framework & Tools' skills={this.props.frameworkTools} />

                <DeveloperAchievements achievementHeading='Certifications' achievements={this.props.developerAchievements} />

                <div className="col-xs-12 col-sm-12 col-md-12">
                    <DeveloperWorkExperience professionalExperience={this.props.professionalExperience} />
                </div>
                <div className="clearfix"></div><br/>


            </div>
        );
    };
}

export default ResumeExperience;
