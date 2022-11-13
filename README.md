# @netsells/storybook-mockdate

This package provides an easy and convenient way to lock your stories at a specific date. This is important in cases where you are performing automated Visual Regression Testing, and a change in date/time may cause false failures. 

Not only will this lock your stories at a specific date, it will also display that date as an overlay on your story to show the date being mocked.

This decorator is compatible with Vue and React stories.

## Installation

```sh
$ yarn add -D @netsells/storybook-mockdate
``` 

## Usage

### Setup

Provide the decorator in your storybook decorators config:

```js
import withMockdate from '@netsells/storybook-mockdate';

export default [
    withMockdate,
];
```

### Stories

To lock your stories at a specific date, you can simply provide the `mockdate` parameter with your date:

```js
export default {
    parameters: {
        mockdate: new Date('2020-01-14T15:47:18.502Z'), // Any date contructor format will work
    },
};
```

You can also provide a date to specific stories if required:

```js
story.parameters = {
    mockdate: new Date('2020-01-14T15:47:18.502Z'), // Any date contructor format will work
};
```
