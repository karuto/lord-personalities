import React from 'react';
import {lords} from '../../utils/data.js';
import Footer from '../footer';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.config = {
            isContentVisible: true
        };

        this.strings = {
            headingGlobal: 'Mount & Blade Lord Personalities Recorder',
            subheadingGlobal: 'Tried of remembering which lord is a gentlemen or an asshole? Say no more.'
        };
    }

    render() {
        const lordNames = lords.map(lord => <h3>{lord}</h3>);

        return (
            <div className='container container--global'>
                <div className='overlay'>
                    <header className='titles'>
                        <h1 className='heading heading--titles'>{this.strings.headingGlobal}</h1>
                        <h3 className='subheading subheading--titles'>{this.strings.subheadingGlobal}</h3>
                    </header>
                </div>
                <div className='container container--contents'>
                    {this.config.isContentVisible ? lordNames : null}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;
