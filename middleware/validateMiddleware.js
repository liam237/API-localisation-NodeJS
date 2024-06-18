import { check } from "express-validator";

export const validateUser = [
  check("username", "Username is required").not().isEmpty(),
  check("password", "Password is required").isLength({ min: 6 }),
];
