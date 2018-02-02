import React from 'react';
import { shallow, configure } from 'enzyme';
import Results from 'src/components/Results';
import Tile from 'src/components/Tile';
import { Link } from 'react-router-dom';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Results />', () => {
  test('should render a h1, 10 tiles and a link', () => {
    const wrapper = shallow(<Results users={new Array(10).fill({ title: 'hello' })} styles={{}} />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Tile)).toHaveLength(10);
  });
});
