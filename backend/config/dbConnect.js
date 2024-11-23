import mongoose from "mongoose";

export const connectDatabase = () => {
  let DB_URI = "";

  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
  const DB_CLUSTER = process.env.DB_CLUSTER;
  const DB_PARAMS = process.env.DB_PARAMS;

  if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
  if (process.env.NODE_ENV === "PRODUCTION") DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/?${DB_PARAMS}`;

  mongoose.connect(DB_URI).then((con) => {
    console.log(
      `MongoDB Database connected with HOST: ${con?.connection?.host}`
    );
  });
};
