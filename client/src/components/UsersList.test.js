import renderer from 'react-test-renderer';
import React from 'react';
import { shallow} from 'enzyme';

import UsersList from './UsersList';

const users = [
  {
    'active': true,
    'email': 'danrb1978@gmail.com',
    'id': 1,
    'username': 'dan'
  },
  {
    'active': true,
    'email': 'michael@realpython.com',
    'id': 2,
    'username': 'michael'
  }
]

test('Users renders properly', () => {
  const wrapper = shallow(<UsersList users={users}/>);
  const element = wrapper.find('h4');
  expect(element.length).toBe(2);
  expect(element.get(0).props.className).toBe('well');
  expect(element.get(0).props.children).toBe('dan');
})

test('UsersList renders a snapshot properly', () => {
  const tree = renderer.create(<UsersList users={users}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
