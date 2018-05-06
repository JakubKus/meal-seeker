import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Body from '../src/body';

const body = mount(<Body/>);

describe('0 buttons clicked', () => {
  it('answer button doesn\'t have class `checked`', () => {
    expect(body.find('button').at(1).hasClass('checked')).toBeFalsy();
  });
  it('meals number is 0', () => {
    expect(body.state('meals').every(meal => meal.isActive === false)).toBeTruthy()
  });
  it('choose button is inactive', () => {
    expect(body.find('footer.chooseButton').hasClass('active')).toBeFalsy();
  });
});

describe('after 1st button click', () => {
  it('answer button has class `checked`', () => {
    body.find('button').at(1).simulate('click');
    expect(body.find('button').at(1).hasClass('checked')).toBeTruthy();
  });
  it('meals number is more than 0', () => {
    expect(body.find('button').at(1).hasClass('checked')).toBeTruthy();
  });
  it('choose button is active', () => {
    expect(body.find('footer.chooseButton').hasClass('active')).toBeTruthy();
  });
});

describe('after choose button click', () => {
  it('figure has class `chosen`', () => {
    body.find('footer.chooseButton').find('button').simulate('click');
    expect(body.find('figure').hasClass('chosen')).toBeTruthy();
  });
  it('random meal span is not empty', () => {
    expect(body.find('figure').find('span#randomMeal').text().length).toBeGreaterThan(0);
  });
});