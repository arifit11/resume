import React from 'react';

class DeveloperProfessionalExperienceItem extends React.Component {
    render() {
        return (
            <li className={`pad-10 ${this.props.workExperience.isCurrentCompany ? 'active' : ''}`}>
                <strong>{this.props.workExperience.company}</strong>

                <span className="job-time pull-right round-2 small">{this.props.workExperience.type}</span>
                <table className="mar-t5">
                    <tbody>
                        <tr>

                           <td className="smaller vtop pad-r5"><em>Client:</em></td>
                           <td className="smaller line-ht14"><em>{this.props.workExperience.Client}</em></td>

                        </tr>
                        <tr>
                            <td className="smaller vtop pad-r5 pad-t4"><em>Project:</em></td>
                            <td className="smaller line-ht14 pad-t4"><em>{this.props.workExperience.technologies}</em></td>
                        </tr>
                        <tr>
                            <td className="smaller vtop pad-r5 pad-t4"><em>Location:</em></td>
                            <td className="smaller line-ht14 pad-t4"><em>{this.props.workExperience.location}</em></td>
                        </tr>
                    </tbody>
                </table>
                <div className="clearfix"></div><div className="bot-6"></div>
                <ul className="dev-roles">
                    {this.props.workExperience.roles.map((role) => (
                        <li>{role}</li>
                    ))}
                </ul>

            </li>
        );
    }
}

export default DeveloperProfessionalExperienceItem;
