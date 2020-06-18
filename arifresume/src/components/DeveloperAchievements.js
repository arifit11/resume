import React from 'react';
import DeveloperAchievementItem from './DeveloperAchievementItem';

class DeveloperAchievements extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6">
                <ul className="list-unstyled re-ul">
                <li><strong className="black">{this.props.achievementHeading}</strong></li>
                {
                    this.props.achievements.map((achievement) => {
                        return <DeveloperAchievementItem achievement={achievement} key={achievement.id} />
                    })
                }
                </ul>
            </div>
        );
    }
}

export default DeveloperAchievements;
