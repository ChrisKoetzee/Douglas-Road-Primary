import { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import Template from "../components/Template";
import { Link } from "react-router-dom";

import "./Home.css";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then(() => setMessage(message))
			.catch((err) => err);
	}, [message]);

	return (
		<main role="main">
			<Template>
				<Container className="d-flex justify-content-center, p-3" fluid="md">
					<Row className="align-items-center">
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Card.Title as="h1">
									Welcome to Douglas Primary School
								</Card.Title>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Card.Text>
								<Link to="student-registration">
									<Button
										className="mb-3"
										variant="dark"
										type="submit"
										block="true"
									>
										{" "}
										Register a new student
									</Button>
								</Link>{" "}
							</Card>
						</Col>
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Image
									src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/308967485_521389659992173_8483769297812494645_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Bh0PsWjhaHQAX_i4S6c&_nc_ht=scontent-cpt1-1.xx&oh=00_AfA_NsqwBIYnaT1E98tRti0Yfxw-tDGyc1D5e1FMWqgzRQ&oe=6469F0C4"
									alt="front of school"
									fluid
									height="100%"
									className="flex-column"
								/>
							</Card>
						</Col>
					</Row>
				</Container>
			</Template>
		</main>
	);
}

export default Home;
