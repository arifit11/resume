import React from 'react';

class DeveloperAchievementItem extends React.Component {
    render() {
        return (
            <li className="small">
                {this.props.achievement.title}
                <span className="pull-right">{this.props.achievement.year}</span>
                <div className="clearfix"></div>
                <em className="smaller">{this.props.achievement.desc}</em>
            </li>
        );
    }
}

export default DeveloperAchievementItem;
