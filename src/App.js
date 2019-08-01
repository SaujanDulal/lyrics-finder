import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<React.Fragment>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Index} />
							<Route path={`/lyrics/track/:id`} component={Lyrics} />
						</Switch>
					</div>
				</React.Fragment>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
