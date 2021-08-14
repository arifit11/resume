import React from 'react';
import DeveloperProfessionalExperienceItem from './DeveloperProfessionalExperienceItem';

class DeveloperWorkExperience extends React.Component {
    render() {
        return (
            <ul className="list-unstyled re-ul">
            <li><b className="black">Professional Experience</b></li>
            {
                this.props.professionalExperience.map((workExperience) => {
                    return <DeveloperProfessionalExperienceItem workExperience={workExperience} key={workExperience.id} />
                })
            }
            </ul>
        );
    }
}

export default DeveloperWorkExperience;
