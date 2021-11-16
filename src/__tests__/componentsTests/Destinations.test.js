import React from 'react';
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';
import Destinations from '../../components/Destinations';

describe('Destinations', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Destinations />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("the className of the component includes container", () => {
    const root = create(<Destinations />).root;
    const element = root.findByType("div");
    expect(element.props.className.includes("container")).toBe(true);
  });
  test("the  component to have h4 element", () => {
    const root = create(<Destinations />).root;
    const element = root.findByType('h4');
    expect(element.type).toBe('h4');
  });
  test("the  component to have h5 element with right content", () => {
    const root = create(<Destinations />).root;
    const element = root.findByType('h5');
    expect(element.children.includes(" Please select Favourite Destination ")).toBe(true);
  });
});


