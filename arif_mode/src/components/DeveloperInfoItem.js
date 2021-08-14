import React from 'react';

class DeveloperInfoItem extends React.Component {
    render() {
        return (
            <tr>
                <td className="pad-5 pad-l0 pad-b0"><img src={this.props.info.icon} className="detail-icon"/></td>
                <td className="pad-5 pad-l0 pad-t7">{this.props.info.value}</td>
            </tr>
        );
    };
}

export default DeveloperInfoItem;
