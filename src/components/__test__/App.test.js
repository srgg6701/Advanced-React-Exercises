    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from '../App';

    it('shows the comment box', () => {
        epxect(document.querySelector('#root div')).contains('Component box here');
    });