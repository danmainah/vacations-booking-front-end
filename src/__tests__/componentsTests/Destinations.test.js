import React from 'react';
import renderer, { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import Destinations from '../../components/Destinations';
import store from '../../redux/store';

describe('Destinations', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Destinations /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('the className of the component includes container', () => {
    const { root } = create(<Provider store={store}><Destinations /></Provider>);
    const element = root.findByType('div');
    expect(element.props.className.includes('container')).toBe(true);
  });
  test('the  component to have h4 element', () => {
    const { root } = create(<Provider store={store}><Destinations /></Provider>);
    const element = root.findByType('h4');
    expect(element.type).toBe('h4');
  });
  test('the  component to have h5 element with right content', () => {
    const { root } = create(<Provider store={store}><Destinations /></Provider>);
    const element = root.findByType('h5');
    expect(element.children.includes('Please select Favourite Destination')).toBe(true);
  });
});
