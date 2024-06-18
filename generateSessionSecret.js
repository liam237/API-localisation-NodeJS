import crypto from "crypto";
import fs from "fs";

const sessionSecret = crypto.randomBytes(64).toString("hex");
fs.appendFileSync(".env", `\nSESSION_SECRET=${sessionSecret}\n`);

console.log(
  `Session secret generated and added to .env file: ${sessionSecret}`
);
