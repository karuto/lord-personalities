import React from 'react';
// import {fakeLords as lords} from '../../utils/data.js'; //debug
import {lords} from '../../utils/data.js';
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

        const lordsData = {};
        lords.map((lordName) => {
            lordsData[lordName] = {
                name: lordName,
                personality: this.config.personalities.unknown,
                vassalage: false
            };
        });
        this.state = lordsData;

        // bindAndInitDatabase(this);
        this.db = window.localStorage;
        this.initLocalStorage();

        // need to bind these functions because they are called externally
        this.personalityHanlder = this.personalityHanlder.bind(this);
        this.vassalageHanlder = this.vassalageHanlder.bind(this);
    }

    personalityHanlder(event) {
        event.preventDefault();

        // construct new lord object
        const lordName = event.target.getAttribute('lordname');
        console.log('table old lord =', lordName, this.state[lordName]);
        let newLord = this.state[lordName];
        newLord.personality = parseInt(event.target.value);
        console.log('table new lord =', newLord);

        // construct new state object and assign
        let newState = {};
        newState[lordName] = newLord;
        this.setState(newState);

        // save to LocalStorage
        this.saveToLocalStorage();
    }

    vassalageHanlder(event) {
        event.preventDefault();
        const isVassal =  event.target.checked;

        // construct new lord object
        const lordName = event.target.getAttribute('lordname');
        console.log('table old lord =', this.state[lordName]);
        let newLord = this.state[lordName];
        newLord.vassalage = isVassal;
        console.log('table new lord =', newLord);

        // construct new state object and assign
        let newState = {};
        newState[lordName] = newLord;
        this.setState(newState);

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

    render() {
        console.log('table render init =', this.state);

        let lordRows = [];
        for (const lordKey in this.state) {
            const lord = this.state[lordKey];
             lordRows.push(
                <tr key={lord.name}>
                    <td>{lord.name}</td>
                    <TogglePersonality handler={this.personalityHanlder} lord={lord} config={this.config} />
                    <ToggleVassalage handler={this.vassalageHanlder} lord={lord} />
                </tr>
            );
        }

        return (
            <table>
                <TableHeaders />
                <tbody>
                    {lordRows}
                </tbody>
            </table>
        );
    }
}
