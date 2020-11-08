import React from 'react';
import DeveloperAchievementItem from './DeveloperAchievementItem';

class DeveloperAchievements extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12">
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
