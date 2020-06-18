import React from 'react';
import DeveloperLanguageItem from './DeveloperLanguageItem';

class DeveloperLanguages extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h5 className="mar-t0">Languages</h5>
                <p className="small nomar">
                {
                    this.props.developerLanguages.map((language) => {
                        return <DeveloperLanguageItem language={language} key={language.id} />
                    })
                }
                </p>
                <div className="clearfix"></div><br/>
            </div>
        );
    }
}

export default DeveloperLanguages;
