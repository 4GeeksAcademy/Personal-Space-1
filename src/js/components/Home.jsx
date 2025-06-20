import React, { useState } from "react";
import Seconds from "./Seconds"
import Example1 from "./Example1"
import Example2 from "./Example2"
import Example3 from "./Example3"
import Example4 from "./Example4"
import Example5 from "./Example5"
import Example6 from "./Example6"
import Example7 from "./Example7"

const Home = () => {
	return (
		<div className="container-fluid" id="wrapper">
			<Seconds />
			<Example1 />
			<Example2 />
			<Example3 />
			<Example4 />
			<Example5 />
			<Example6 />
			<Example7 />
		</div>
	)
};

export default Home;

