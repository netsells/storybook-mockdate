import mockdate from 'mockdate';
import dayjs from 'dayjs';
import vueOverlay from './vue';
import reactOverlay from './react';

export default ((story, {
    parameters,
}) => {
    mockdate.reset();

    if (!parameters.mockdate) {
        return story();
    }

    // Allows us to "time travel" to ensure our stories don't change over time
    mockdate.set(parameters.mockdate);

    const mockedDate = dayjs(parameters.mockdate).format('DD-MM-YYYY HH:mma');
    const framework = parameters.framework || parameters.renderer;

    switch (framework) {
        // The docs aren't clear as to whether parameters.renderer returns "@storybook/react" or "react"
        case '@storybook/react':
        case 'react':
            return reactOverlay(story, mockedDate);

        case '@storybook/vue':
        case '@storybook/vue3':
        case 'vue':
        case 'vue3':
            return vueOverlay(mockedDate);
    }

    throw new Error(`Framework [${ framework }] not supported.`);
});
