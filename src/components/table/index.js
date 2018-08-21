import React from 'react';
import {lords} from '../../utils/data.js';
import {bindAndInitDatabase} from '../../utils/database.js';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.config = {
            personalities: {
                good: 0,
                martial: 1,
                other: 2,
                default: 2
            }
        };
        const lordsData = {};
        lords.map((lordName) => {
            lordsData[lordName] = {
                name: lordName,
                personality: this.config.personalities.default,
                vassalage: false
            };
        });
        this.state = lordsData;

        console.log('### state =', this.state);

        // bindAndInitDatabase(this);
    }

    initState(lords) {
        const lordsData = {};
        lords.map((lordName) => {
            lordsData[lordName] = {
                name: lordName,
                personality: this.config.personalities.default,
                vassalage: false
            };
        });
        this.setState({lords: lordsData}, () => {
            console.log('### callback of setState =', this.state)
        });
    }

    render() {
        console.log('render =', this.state);
        let lordRows = [];
        for (const lordKey in this.state) {
            const lord = this.state[lordKey];
            console.log('for loop =', lord);
             lordRows.push(
                <tr key={lord.name}>
                    <td>{lord.name}</td>
                    <td>{lord.personality}</td>
                    <td>{lord.vassalage ? 'Yes' : 'No'}</td>
                </tr>
            );
        }

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Personality</th>
                    <th>Vassalage</th>
                </tr>
            </thead>
            <tbody>
                {lordRows}
            </tbody>
            </table>
        );
    }
}
