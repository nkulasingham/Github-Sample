import React from 'react';
import { shallow, configure } from 'enzyme';
import Home from 'src/components/Home';
import Adapter from 'enzyme-adapter-react-16';
import styles from '../styles.scss';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  test('should render a form with an input and a button', () => {
    const wrapper = shallow(<Home styles={styles} />);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  test('should render the css correctly', () => {
    const wrapper = shallow(<Home styleProps={styles} />);
    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.find('h1').first().hasClass('title')).toBe(true);
    expect(wrapper.find('form').first().hasClass('userSearch')).toBe(true);
  });
});
