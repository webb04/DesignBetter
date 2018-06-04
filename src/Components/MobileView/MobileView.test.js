import React from 'react';
import ReactDOM from 'react-dom';
import MobileView, { getMobileUrl } from './MobileView';
import { shallow } from 'enzyme';

const options = [
    {
        title: 'Design Tool',
        subtitle: 'Share every design',
        features: [
            {
                title: 'Design Tool',
                image: 'cloud/prototyping.png'
            },
            {
                title: 'Design Tool',
                image: 'cloud/prototyping.png'
            },
            {
                title: 'Design Tool',
                image: 'cloud/prototyping.png'
            }
        ]
    }
];

it('Renders the correct number of images', () => {
    const mobileView = shallow(<MobileView options={options}/>);
    expect(mobileView.find('.image')).toHaveLength(3);
});

it('Generates correct mobile url', () => {
    const output = getMobileUrl('cloud/prototyping.png');
    const expected = '/Images/cloud/prototyping--mobile.png';
    expect(expected).toBe(output);
});