import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Option from './Option';
import { shallow } from 'enzyme';

const selected = {
    onClick: () => {},
    title: 'Built-in animations',
    subtitle: 'Show user interactions',
    progress: 50,
    selected: true,
};

const unselected = {
    onClick: () => {},
    title: 'Built-in animations',
    subtitle: 'Show user interactions',
    progress: 10,
    selected: false,
};

it('Shows correct progress', () => {
    const selectedOption = renderer.create(<Option {...selected}/>).toJSON();
    expect(selectedOption.children[2].children[0].props.style.width).toEqual('50%');
    expect(selectedOption.children[2].children[0].props.style.display).toEqual('block');

    const unselectedOption = renderer.create(<Option {...unselected}/>).toJSON();
    expect(unselectedOption.children[2].children[0].props.style.width).toEqual('10%');
    expect(unselectedOption.children[2].children[0].props.style.display).toEqual('none');
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Option {...selected}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});