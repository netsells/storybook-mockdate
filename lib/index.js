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

    if (parameters.framework === 'vue') {
        return vueOverlay(mockedDate);
    }

    if (parameters.framework === 'react') {
        return reactOverlay(story, mockedDate);
    }

    throw new Error(`Framework [${ parameters.framework } not supported.`);
});
