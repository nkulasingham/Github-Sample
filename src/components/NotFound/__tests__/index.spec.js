import React from 'react';
import { shallow, configure } from 'enzyme';
import NotFound from 'src/components/NotFound';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NotFound  />', () => {
  test('should render a h1 with an paragraph and a button', () => {
    const wrapper = shallow(<NotFound history={{}} />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
