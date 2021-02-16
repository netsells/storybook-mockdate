import mockdate from 'mockdate';
import dayjs from 'dayjs';

export default (story, { parameters }) => {
    mockdate.reset();

    // Allows us to "time travel" to ensure our stories don't change over time
    if (parameters.mockdate) {
        mockdate.set(parameters.mockdate)

        const mockedDate = dayjs(parameters.mockdate).format('DD-MM-YYYY HH:mma');

        return `
            <div>
                <story />
                <div
                    style="
                        position: fixed;
                        bottom: 0;
                        right: 0;
                        background: rgba(0, 0, 0, 0.15);
                        padding: 5px;
                        line-height: 1;
                    "
                >
                    Mocking date: ${ mockedDate }
                </div>
            </div>
        `;
    }

    return story();
};
