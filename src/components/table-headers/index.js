import React from 'react';

export default class TableHeaders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};

        this.config = {
            modalText: {
                vassalage: 'Check this box if you have created your own faction (kingdom) and this lord has become your vassal.'
            },
            genericText: {
                confirm: 'Got it!',
                prompt: '?'
            }
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    getModal() {
        if (this.state.showModal) {
            return (
                <div className='th__modal'>
                    <div className='th__modal__content'>{this.config.modalText.vassalage}</div>
                    <div className='th__modal__confirm' onClick={this.toggleModal}>{this.config.genericText.confirm}</div>
                </div>
            );
        }
        return null;
    }

    toggleModal() {
        this.setState((prevState, props) => {
            return {showModal: !prevState.showModal}
        });
    }

    render() {
        const modalPrompt = <span className='th__prompt' onClick={this.toggleModal}>{this.config.genericText.prompt}</span>;

        return (
            <thead>
                <tr>
                    <th>Lord Name</th>
                    <th>Personality Type</th>
                    <th>
                        Vassalage {modalPrompt}
                        {this.getModal()}
                    </th>

                </tr>
            </thead>
        );
    }
}
