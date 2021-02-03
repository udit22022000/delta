import React from 'react';
import './App.css';
import {Sidebar} from './Components/Sider'
import RightCard from './Components/RightCards';
const App = () => {
	return (
		<div>
			<Sidebar/>
			<RightCard />
		</div>
	);
};

export default App;
