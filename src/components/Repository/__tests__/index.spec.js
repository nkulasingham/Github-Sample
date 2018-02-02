import React from 'react';
import { shallow, configure } from 'enzyme';
import Repository from 'src/components/Repository';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Repository  />', () => {
  test('should render properly', () => {
    const wrapper = shallow(<Repository stargazers={{}} styles={{}} forkCount={20} />);
    expect(
      wrapper
        .find('.is-3')
        .children()
        .first()
        .text(),
    ).toBe('20');
  });
  test('should parent url', () => {
    const url = 'http://google.com';
    const wrapper = shallow(
      <Repository isFork parent={{ url }} stargazers={{}} styles={{}} forkCount={20} />,
    );
    expect(wrapper.find({ href: url })).toHaveLength(1);
  });
});
