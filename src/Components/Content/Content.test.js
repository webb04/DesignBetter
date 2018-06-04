import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Content from './Content';
import { shallow } from 'enzyme';

const features = [
    {
        image: 'cloud/prototyping.png',
        title: 'Design Tool',
        subtitle: 'Share every design'
    },
    {
        image: 'cloud/prototyping.png',
        title: 'Design Tool',
        subtitle: 'Share every design'
    }
];

it('Renders the correct number of features', () => {
    const content = shallow(<Content features={features}/>);
    expect(content.find('.feature')).toHaveLength(2);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Content features={features}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});