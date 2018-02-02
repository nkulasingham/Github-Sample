import React from 'react';
import { shallow, configure } from 'enzyme';
import Profile from 'src/components/Profile';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Profile  />', () => {
  test('should render a profile avatar', () => {
    const avatarUrl = 'https://plachold.it/50x50';
    const wrapper = shallow(<Profile styles={{}} avatarUrl={avatarUrl} />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find({ src: avatarUrl })).toHaveLength(1);
  });
  test('should followers and following if given props', () => {
    const wrapper = shallow(
      <Profile styles={{}} followers={{ totalCount: 25 }} following={{ totalCount: 14 }} />,
    );
    expect(wrapper.contains(<strong> 25 Followers </strong>)).toBe(true);
    expect(wrapper.contains(<strong> 14 Following </strong>)).toBe(true);
  });
});
