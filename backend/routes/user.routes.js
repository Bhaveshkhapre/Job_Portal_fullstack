import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAunticated from "../middlewares/isAuthentication.js";
import { SingleUpload } from "../middlewares/mutler.js";


const router = express.Router();

router.route("/register").post(SingleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAunticated,SingleUpload,updateProfile);


export default router;
