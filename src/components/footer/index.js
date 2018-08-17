import React from 'react';

export default function Footer() {
    const links = {
      homepage: 'https://github.com/karuto',
      github: 'https://github.com/karuto/lord-personalities',
      email: 'mailto:hi@vincentzh.com'
    };

    const content = (
        <div>
            Made by <a href={links.homepage}>Vincent Zhang.</a>
            &nbsp;Find this project on <a href={links.github}>GitHub</a>
            &nbsp;or write me an <a href={links.email}>email.</a>
        </div>
    );

    return (
        <footer className='container'>
            {content}
        </footer>
    );
};
