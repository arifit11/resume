import React from 'react';
import DeveloperAchievements from './DeveloperAchievements';
class DeveloperExtraDetails extends React.Component {
    render() {
        return (
            <div>
                <h5>Hobbies</h5>
                <p className="small">Interest in cooking, swimming, Listening Music and travelling</p>
                <div className="clearfix"></div><br/>
                <h5 className="mar-t0">Nationality</h5>
                <p className="small">Indian</p>
                <br/>

                <h5>Personal Details</h5>
                <p className="small">D/O Mr Ashok Madan &</p>
                <p className="small">Mrs Seema Madan</p>
                <p className="small">Hial from Sonipat </p>
                <p className="small">Current stay Chennai </p>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default DeveloperExtraDetails;
