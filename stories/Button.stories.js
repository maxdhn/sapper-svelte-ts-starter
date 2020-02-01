import '../src/styles/tailwind.css';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/svelte';
import ButtonSimple from '../src/components/Button.svelte';
// import markdownNotes from './buttons.stories.md';

storiesOf('Buttons | Buttons', module)
    //Simple Button
    .add(
        'Simple',
        () => ({
            Component: ButtonSimple,
            props: { text: 'Button' },
            on: {
                click: action('I am logging in the actions tab too'),
            },
        }),
        // { notes: { markdown: markdownNotes } },
    )