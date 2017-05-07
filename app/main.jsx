import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App'
import { store } from './redux';

render(
	<Provider store={store}>
		<Router>
			<MuiThemeProvider>
				<Route path="/" component={App} />
			</MuiThemeProvider>
		</Router>
	</Provider>,
	document.getElementById('app')
);
