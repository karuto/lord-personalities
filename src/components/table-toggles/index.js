import React from 'react';

class TogglePersonality extends React.Component {
    constructor(props) {
        super(props);
        // p = personality shorthand
        this.pConfig = this.props.config.personalities;
        // console.log('button init =', this.props.lord);
    }

    getPersonality(numericPersonalityValue) {
        for (const key in this.pConfig) {
            if (this.pConfig[key] === numericPersonalityValue) {
                return key;
            }
        }
        return this.pConfig.default;
    }

    getButton(personality) {
        const buttonName = `personality_${this.props.lord.name}`;

        return (
            <label>
                <input
                    className='selection__button'
                    type='radio'
                    lordname={this.props.lord.name}
                    name={buttonName}
                    value={personality}
                    checked={this.props.lord.personality === personality}
                    onChange={this.props.handler}
                />
                <span className='selection__text'>
                    {this.getPersonality(personality)}
                </span>
            </label>
        );
    }

    render() {
        // console.log('button render =', this.props.lord);
        return (
            <td className='cell cell--personality'>
                {this.getButton(this.pConfig.good)}
                {this.getButton(this.pConfig.martial)}
                {this.getButton(this.pConfig.bad)}
                {this.getButton(this.pConfig.unknown)}
            </td>
        );
    }
}

class ToggleVassalage extends React.Component {
    constructor(props) {
        super(props);
    }

    getVassalage(input) {
        return (input === 'true');
    }

    render() {
        const buttonName = `vassalage_${this.props.lord.name}`;

        return (
            <td className='cell cell--vassalage'>
                <label>
                    <input
                        className='selection__button'
                        type='checkbox'
                        lordname={this.props.lord.name}
                        name={buttonName}
                        value='true'
                        checked={this.props.lord.vassalage === true}
                        onChange={this.props.handler}
                    />
                    <span className='selection__text'>
                        My vassal
                    </span>
                </label>
            </td>
        );
    }
}



module.exports = {
    TogglePersonality,
    ToggleVassalage
};
