import overlayStyles from './styles';

const vueOverlay = (date) => {
    return {
        name: 'mockdate-wrapper',

        template: `
            <div>
                <story />
                <div :style='${ JSON.stringify(overlayStyles()) }'>
                    Mocking date: ${ date }
                </div>
            </div>
        `,
    };
};

export default vueOverlay;
