import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Accordion from './Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<ul>', () => {
  it('renders empty list', () => {
    const body = renderer.create(<Accordion />).toJSON();
    expect(body).toMatchSnapshot()
  });

  it('renders no sections as active by default', () => {
    const body = renderer.create(<Accordion sections={sections} />).toJSON();
    expect(body).toMatchSnapshot()
  });

  it('Opens contents when clicked', () => {
    const body = shallow(<Accordion sections={sections} />);
    body.find('button').at(1).simulate('click');
    expect(toJson(body)).toMatchSnapshot()
  });

  it('Only one content shown', () => {
    const body = shallow(<Accordion sections={sections} />);
    body.find('button').at(0).simulate('click');
    body.find('button').at(1).simulate('click');
    expect(toJson(body)).toMatchSnapshot()
  });
})