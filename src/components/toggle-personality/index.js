import React from 'react';

export default class TogglePersonality extends React.Component {
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
        // console.log('button func =', this.props.lord.name, 'button =', personality, 'checked =', this.props.lord.personality);
        return (
            <label>
                <input
                    className='personality__radiobutton'
                    type='radio'
                    name={this.props.lord.name}
                    value={personality}
                    checked={this.props.lord.personality === personality}
                    onChange={this.props.handler}
                />
                <span className='personality__text'>
                    {this.getPersonality(personality)}
                </span>
            </label>
        );
    }

    render() {
        // console.log('button render =', this.props.lord);
        return (
            <td>
                {this.getButton(this.pConfig.good)}
                {this.getButton(this.pConfig.martial)}
                {this.getButton(this.pConfig.bad)}
                {this.getButton(this.pConfig.unknown)}
            </td>
        );
    }
}
