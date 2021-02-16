import React from 'react'
import { render } from '@testing-library/react'
import Landing from './Landing'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('../../service/authentication.ts', () => ({
  signIn: () => jest.fn(),
}))

const mockStore = configureMockStore([thunk])
const store = mockStore({})

describe('Landing component', () => {
  it('renders without crashing', () => {
    render(
        <Provider store={store}>
            <Landing />
        </Provider>
    )
  })
})