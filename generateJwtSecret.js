import crypto from "crypto";
import fs from "fs";

const jwtSecret = crypto.randomBytes(64).toString("hex");
fs.appendFileSync(".env", `\nJWT_SECRET=${jwtSecret}\n`);

console.log(`JWT secret generated and added to .env file: ${jwtSecret}`);
