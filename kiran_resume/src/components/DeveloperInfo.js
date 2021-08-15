import React from 'react';
import DeveloperInfoItem from './DeveloperInfoItem';

class DeveloperInfo extends React.Component {
    render() {
        return (
            <table className="small">
                <tbody>
                {
                    this.props.developerInfo.map((info) => {
                        return <DeveloperInfoItem info={info} key={info.id} />
                    })
                }
                </tbody>
            </table>
        );
    };
}

export default DeveloperInfo;
