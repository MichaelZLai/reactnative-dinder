import React, { Component } from 'react'
import {Provider} from 'mobx-react'
import AppNavigator from './app/app.nagivator'
import stores from './app.stores'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider stores={stores}>
        <AppNavigator />
      </Provider>
    )
  }
}


