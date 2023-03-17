import express from "express";
import { login, register } from "../controllers/auth.js";
import { updateImage } from "../controllers/gallery.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.put("/image", updateImage); //update image route
export default router;
router.get("/user", getUser);
