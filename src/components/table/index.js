import React from 'react';
// import {fakeLords as lords} from '../../utils/data.js'; //debug
import {fakeLords as lords} from '../../utils/data.js';
import {bindAndInitDatabase} from '../../utils/database.js';
import TableHeaders from '../table-headers';
import {TogglePersonality, ToggleVassalage} from '../table-toggles';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.config = {
            localStorageKey: 'lords',
            personalities: {
                good: 0,
                martial: 1,
                bad: 2,
                unknown: 3
            }
        };

        const lordsData = [];
        lords.map((lordName) => {
            lordsData.push({
                name: lordName,
                personality: this.config.personalities.unknown,
                vassalage: false
            });
        });
        this.state = {lords: lordsData};
        console.log('### init =', JSON.stringify(this.state.lords));

        // bindAndInitDatabase(this);
        this.db = window.localStorage;
        this.initLocalStorage();

        // need to bind these functions because they are called externally
        this.getLordFrom = this.getLordFrom.bind(this);
        this.attributeHanlder = this.attributeHanlder.bind(this);
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    getLordFrom(lordName, source) {
        if (source === undefined) {
            // if optional source isn't supplied, default source is state array
            source = this.state.lords;
        }

        // validate array
        if (typeof source === 'object' && source.length !== undefined) {
            return source.find((lord) => {
                return lord.name === lordName
            });
        }
        console.warn('Warning: Lords is not a valid array.');
        return null;
    }

    attributeHanlder(event) {
        event.preventDefault();
        const type = event.target.getAttribute('type');
        let attribute, value;

        if (type === 'radio') {
            attribute = 'personality';
            value = parseInt(event.target.value);
        } else if (type === 'checkbox') {
            attribute = 'vassalage';
            value = event.target.checked;
        }

        const localLords = this.state.lords;

        // construct new lord object
        const lordName = event.target.getAttribute('lordname');
        let newLord = this.getLordFrom(lordName, localLords);
        newLord[attribute] = value;

        // construct new state object and assign
        this.setState({lords: localLords});

        // save to LocalStorage
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        const key = this.config.localStorageKey;
        const state = JSON.stringify(this.state);
        this.db.setItem(key, state);
    }

    initLocalStorage() {
        const key = this.config.localStorageKey;
        const state = JSON.stringify(this.state);

        if (this.db[key]) {
            // local storage already has lords data
            // retrieve it and compare
            if (key != state) {
                // if state doesn't match, restore whatever's in the local storage
                this.state = JSON.parse(this.db.getItem(key));
            }
        } else {
            // local storage does not have lords data
            // save to local storage
            this.db.setItem(key, state);
        }
    }

    compareBy(key) {
        return function (a, b) {
            // console.log('### compare =\n', a, a[key], '\n', b, b[key], '\n', a[key]>b[key]);
            if (key === 'vassalage') {
                // special case for comparing false & true
                if (a[key] < b[key]) return 1;
                if (a[key] > b[key]) return -1;
            } else {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
            }
        return 0;
        };
    }

    sortBy(key) {
        let sortedlords = this.state.lords;

        sortedlords.sort(this.compareBy(key))
        this.setState({lords: sortedlords}, () => {
            // save to LocalStorage
            this.saveToLocalStorage();
        });
    }

    render() {
        console.log('table render init =', JSON.stringify(this.state.lords));

        const lordRows = this.state.lords.map((lord) => {
            return (
               <tr key={lord.name}>
                   <td>{lord.name}</td>
                   <TogglePersonality handler={this.attributeHanlder} lord={lord} config={this.config} />
                   <ToggleVassalage handler={this.attributeHanlder} lord={lord} />
               </tr>
           );
        });

        return (
            <table>
                <TableHeaders sortBy={this.sortBy} />
                <tbody>
                    {lordRows}
                </tbody>
            </table>
        );
    }
}
