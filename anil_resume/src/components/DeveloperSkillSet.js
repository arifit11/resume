import React from 'react';
import DeveloperSkillItem from './DeveloperSkillItem';

class DeveloperSkillSet extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6">
                <ul className="list-unstyled re-ul">
                <li><strong className="black">{this.props.skillSetHeading}</strong></li>
                {
                    this.props.skills.map((skill) => {
                        return <DeveloperSkillItem skill={skill} key={skill.id} />
                    })
                }
                </ul>
            </div>
        );
    }
}

export default DeveloperSkillSet;
