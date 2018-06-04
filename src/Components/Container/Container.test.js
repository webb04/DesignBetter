import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { shallow } from 'enzyme';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;

it('Renders correctly with initial state', () => {
    const container = shallow(<Container increment={1}/>);

    const { selected, automaticSwap, pauseProgress } = container.state();
    expect(selected).toBe(0);
    expect(automaticSwap).toBe(true);
    expect(pauseProgress).toBe(false);

    expect(container.find('.option')).toHaveLength(3);
});

it('Increments progress using setInterval', async () => {
    const container = shallow(<Container increment={0.15}/>);
    const fastContainer = shallow(<Container increment={0.2}/>);
    const { progress } = container.state();
    expect(progress).toBe(0);

    await new Promise(res => setTimeout(() => {
        expect(container.state().progress).not.toBe(0);
        expect(fastContainer.state().progress > container.state().progress).toBe(true);
        res();
    }, 500));
});

it('Does not increment with progress paused', async () => {
    const container = shallow(<Container increment={0.15}/>);
    container.setState({ pauseProgress: true });

    await new Promise(res => setTimeout(() => {
        expect(container.state().progress).toBe(0);
        res();
    }, 500));
});

it('Automatically swaps tabs', async () => {
    const container = shallow(<Container increment={4}/>);
    // 60 ticks per second for 60fps
    // after 100 ticks, increment to next tab
    await Promise.all([
        // ticks = 60
        new Promise(res => setTimeout(() => {
            expect(container.state().selected).toBe(0);
            res();
        }, 250)),
        // ticks = 120
        new Promise(res => setTimeout(() => {
            expect(container.state().selected).toBe(1);
            res();
        }, 500)),
        // ticks = 240
        new Promise(res => setTimeout(() => {
            expect(container.state().selected).toBe(2);
            res();
        }, 1000))
    ]);
});