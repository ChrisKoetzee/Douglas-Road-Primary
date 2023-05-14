import { Router } from "express";
// import jwt from "jsonwebtoken";

import logger from "./utils/logger";
// const JWT_SECRET = "Super Secret code....";
// Demo Database

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// router.post("/login", (req, res) => {
// 	const { email, password } = req.body;

// 	const user = Users.find((user) => user.email === email);

// 	if (!user) {
// 		return res.status(400).json({ error: "Invalid credentials" });
// 	}

// 	if (user.password !== password) {
// 		return res.status(400).json({ error: "Invalid credentials" });
// 	}

// 	const payload = { id: user.id };
// 	const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "30m" });
// 	res.json({ token });
// });//*css*/`

export default router;
