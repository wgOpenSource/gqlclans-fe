import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from 'components/App'
import client from 'client'
import settings from 'settings'
import rootReducer from 'reducers'

import 'stylesheets/styles.scss'

const store = createStore(rootReducer, { settings })

const app = (store) => (
    <Provider store={store}>
        <ApolloProvider client={client}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </ApolloProvider>
    </Provider>
)

ReactDOM.render(
    app(store),
    document.getElementById('app'),
)
