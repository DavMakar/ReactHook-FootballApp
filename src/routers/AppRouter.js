import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from "../components/Navigation"
import TodayMatches from '../pages/TodayMatches';
import PremierLiga from '../pages/PremierLeague';
import LaLiga from '../pages/LaLiga';
import BundesLiga from '../pages/BundesLiga';
import Table from '../pages/Table';
import TeamInfo from '../pages/TeamInfo';
import SeriaA from '../pages/SeriaA';
import Ligue1 from '../pages/Ligue1';


export default function AppRouter() {
	return (
		
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path='/' component={TodayMatches} />
				<Route  exact path='/PremierLiga' component={PremierLiga} />
				<Route path='/Laliga' component={LaLiga}/>
				<Route path='/BundesLiga' component={BundesLiga}/>
				<Route path='/SeriaA' component={SeriaA}/>
				<Route path='/TeamInfo/:id' component={TeamInfo}/>
				<Route path='/Table' component={Table}/>
				<Route path='/Ligue1' component={Ligue1}/>
			</Switch>
		</BrowserRouter>

	)
}
