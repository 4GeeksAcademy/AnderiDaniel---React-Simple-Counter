import React from "react";

import SecondsCounter from './SecondsCounter';



//create your first component
const Home = () => {
	return (
		<div >
			<SecondsCounter seconds={0}/>
		</div>
	);
};

export default Home;
