import React from 'react';

class DeveloperLanguageItem extends React.Component {
    render() {
        return (
            <span>
                {this.props.language.lang}
                <span className={`pull-right ${this.props.language.level > 2 ? 'circle-filled' : 'circle-empty'}`}></span>
                <span className={`pull-right ${this.props.language.level > 1 ? 'circle-filled' : 'circle-empty'}`}></span>
                <span className={`pull-right ${this.props.language.level > 0 ? 'circle-filled' : 'circle-empty'}`}></span>
                <br/>
            </span>
        );
    }
}

export default DeveloperLanguageItem;
