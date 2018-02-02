import React from 'react';
import { shallow, configure } from 'enzyme';
import Tile from 'src/components/Tile';
import { Link } from 'react-router-dom';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Tile />', () => {
  test('should render the total repository countk', () => {
    const wrapper = shallow(<Tile styles={{}} repositories={{ totalCount: 5 }} />);
    expect(
      wrapper
        .find('.content')
        .children()
        .first()
        .children()
        .last()
        .text()
        .trim(),
    ).toBe('5 total repos');
  });
});
