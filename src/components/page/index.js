import React from 'react';
// import {db} from '../../utils/database.js';
import Footer from '../footer';
import Table from '../table';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.config = {
            isContentVisible: true
        };

        this.strings = {
            headingGlobal: 'Mount & Blade: Warband Lord Personalities Recorder',
            subheadingGlobal: 'Tired of remembering which lord is a gentlemen or an asshole? Say no more.'
        };
    }

    render() {
        return (
            <div className='container container--global'>
                <div className='overlay'>
                    <header className='titles'>
                        <h1 className='heading heading--titles'>{this.strings.headingGlobal}</h1>
                        <h3 className='subheading subheading--titles'>{this.strings.subheadingGlobal}</h3>
                    </header>
                </div>
                <div className='container container--contents'>
                    {this.config.isContentVisible ? <Table /> : null}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;
