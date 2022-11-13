import overlayStyles from './styles';

const reactOverlay = (story, date) => {
    const React = require('react');

    const overlay = React.createElement('div', {
        style: overlayStyles(),
    }, `Mocking date: ${ date }`);

    return React.createElement('div', {}, [
        story(),
        overlay,
    ]);
};

export default reactOverlay;
