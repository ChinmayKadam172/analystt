import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const url = "https://jsonplaceholder.typicode.com/users";
	const [userdata, setuserdata] = useState([]);
	const fetchFunc = async () => {
		try {
			const data = await axios(url);
			setuserdata(data.data);
			console.log(userdata);
		} catch (error) {
			console.log(error.response);
		}
	};
	useEffect(() => {
		fetchFunc();
	}, []);
	return (
		<div>
			<div className="main">
				<Navbar />
				{userdata.map((items) => {
					return (
						<Card
							key={items.id}
							name={items.name}
							username={items.username}
							email={items.email}
							clicked={false}
							address={items.address}
							suite={items.suite}
							company={items.company}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
