import React from 'react';
/** react router for routing */
import { BrowserRouter as Router, Route } from 'react-router-dom';
/** react-dom to render the components */
import { render } from 'react-dom';
/** provider for our store */
import { Provider } from 'react-redux';
/** theme provider for material-ui components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/** our root component */
import App from './components/App';

/** our redux store */
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
