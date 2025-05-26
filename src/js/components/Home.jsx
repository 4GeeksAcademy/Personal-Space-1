import React, { useState } from "react";
import Seconds from "./Seconds"
import Example1 from "./Example1"
import Example2 from "./Example2"
import Example3 from "./Example3"

const Home = () => {
	return (
		<div>
			<Seconds />
			<Example1 />
			<Example2 />
			<Example3 />
		</div>
	)
};

export default Home;