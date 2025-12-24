import express from "express";
import isAunticated from "../middlewares/isAuthentication.js";
import { getCompany, getCompanyByID, registerCompany, updateCompany } from "../controllers/company.controller.js";


const router = express.Router();

router.route("/register").post(isAunticated, registerCompany);
router.route("/get").get(isAunticated, getCompany);
router.route("/get/:id").get(isAunticated, getCompanyByID);
router.route("/update/:id").put(isAunticated, updateCompany);


export default router;
