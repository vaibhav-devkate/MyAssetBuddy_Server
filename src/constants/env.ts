import { config } from "dotenv";

config();

// application
export const PORT: number = Number(process.env.PORT) || 3000;

// database
export const DATABASE_URI: string =
  process.env.DATABASE_URI || "mongodb://localhost:27017/";

// jwt
export const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || "";
export const JWT_EXPIRES: string = process.env.JWT_EXPIRES || "";

// cors
export const ALLOWED_ORIGINS: string[] =
  process.env.ALLOWED_ORIGINS?.split(",") || [];

// aws
export const AWS_REGION: string = process.env.AWS_REGION || "";
export const AWS_ACCESS_KEY_ID: string = process.env.AWS_ACCESS_KEY || "";
export const AWS_SECRET_ACCESS_KEY: string =
  process.env.AWS_SECRET_ACCESS_KEY || "";
export const AWS_BUCKET_NAME: string = process.env.AWS_BUCKET_NAME || "";

// node mailer
export const NODE_MAILER_SENDER_EMAIL: string =
  process.env.NODE_MAILER_SENDER_EMAIL || "";
export const NODE_MAILER_SMTP_HOST: string =
  process.env.NODE_MAILER_SMTP_HOST || "";
export const NODE_MAILER_SMTP_PORT: number = Number(
  process.env.NODE_MAILER_SMTP_PORT
);
export const NODE_MAILER_USER: string = process.env.NODE_MAILER_USER || "";
export const NODE_MAILER_PASS: string = process.env.NODE_MAILER_PASS || "";
export const STAFF_MAIL: string = process.env.STAFF_MAIL || "";
export const STAFF_MAIL_CC: string[] =
  process.env.STAFF_MAIL_CC?.split(",") || [];

export const TOKEN_EXPIRE_TIME =
  Number(process.env.TOKEN_EXPIRE_TIME) || 60 * 5;
export const OTP_TIME_OUT = Number(process.env.OTP_TIME_OUT) || 60 * 5;

export const FRONTEND_BASE_URL: string = process.env.FRONTEND_BASE_URL || "";
