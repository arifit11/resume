import React from 'react';

class DeveloperSkillItem extends React.Component {
    render() {
        return (
            <li className="small">
                {this.props.skill.skillName}
                <span className={`pull-right ${this.props.skill.level > 3 ? 'circle-filled' : 'circle-empty'}`}></span>
                <span className={`pull-right ${this.props.skill.level > 2 ? 'circle-filled' : 'circle-empty'}`}></span>
                <span className={`pull-right ${this.props.skill.level > 1 ? 'circle-filled' : 'circle-empty'}`}></span>
                <span className={`pull-right ${this.props.skill.level > 0 ? 'circle-filled' : 'circle-empty'}`}></span>
            </li>
        );
    }
}

export default DeveloperSkillItem;
