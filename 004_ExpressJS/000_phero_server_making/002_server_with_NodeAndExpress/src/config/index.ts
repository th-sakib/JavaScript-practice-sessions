import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), "/src/.env") });
const config = {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
};

export default config;
