import React from 'react'
import MockDataElement from '../../../../../utils/__mocks__/mock-dataElement'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../../store/__mocks__/mockStore'
import FollowersList, { PureFollowersList } from '../followers-list'
import f from '../../../../../store/__mocks__/reducers/f'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'

describe('FollowersList Component', () => {
  MockDataElement()

  it('should match snapshot with profile link', () => {
    const tree = create(
      <Provider store={mockStore}>
        <Router>
          <FollowersList
            {...f[0]}
          />
        </Router>
      </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show <Follow/> when isFollowing == false', () => {
    const wrapper = shallow(
      <PureFollowersList
        {...f[0]}
        follow_by={7}
      />
    )
    wrapper.setState({ isFollowing: false })
    expect(wrapper.find('Connect(Follow)').exists()).toBe(true)
  })

  it('should show <Unfollow/> when isFollowing == true', () => {
    const wrapper = shallow(
      <PureFollowersList
        {...f[0]}
        follow_by={7}
      />
    )
    wrapper.setState({ isFollowing: true })
    expect(wrapper.find('Connect(Unfollow)').exists()).toBe(true)
  })

})
