import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../../store/mockStore/mockStore'
import ShareList from '../share-list'
import Post from '../../../../../store/mockStore/mock-reducers/Post'
import { BrowserRouter as Router } from 'react-router-dom'

describe('ShareList Component', () => {
  const mockFn = jest.fn()
  const props = {
    ...Post.usersToShare[0],
    post: 44,
    incrementShares: mockFn,
    decrementShares: mockFn,
    postOwner: 7
  }

  const comp = (extraProps={}) => (
    <Provider store={mockStore}>
      <Router>
        <ShareList
          {...props}
          {...extraProps}
        />
      </Router>
    </Provider>
  )

  it('should match snapshot with <PrimaryButton/> for share', () => {
    const tree = create(comp()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with <SecondaryButton/> for unshare', () => {
    const tree = create(comp({
      didIShare: true
    })).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
