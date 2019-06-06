import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
	return (
		<div>
			<img src='https://www.freelogodesign.org/file/app/client/thumb/d392fad7-07f4-4bc1-8ebf-85b90e23de8e_200x200.png?1558620049725' />
		<nav>
			<NavLink  className='navLink'  exact activeClassName='is-active' to='/'>
				Today Matches
			</NavLink>
			 <NavLink  className='navLink' activeClassName='is-active' to='/PremierLiga'>
				Premier League 
			</NavLink>
			<NavLink  className='navLink' activeClassName='is-active' to='/LaLiga'>
				La Liga
			</NavLink>
			<NavLink  className='navLink'activeClassName='is-active' to='/BundesLiga'>
				Bundesliga 
			</NavLink>
			<NavLink className='navLink' activeClassName='is-active' to='/SeriaA'>
				Seria A 
			</NavLink>
			<NavLink className='navLink' activeClassName='is-active' to='/Ligue1'>
				Ligue 1
			</NavLink>
		</nav>
		</div>
	);
}
