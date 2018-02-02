import React from 'react';
import { shallow, configure } from 'enzyme';
import Loader from 'src/components/Loader';
import Adapter from 'enzyme-adapter-react-16';
import { FoldingCube } from 'better-react-spinkit';

configure({ adapter: new Adapter() });

describe('<Loader />', () => {
  test('should render a loader', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(FoldingCube)).toHaveLength(1);
  });
});
