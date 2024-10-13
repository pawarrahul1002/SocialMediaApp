import { v2 as cloudiary } from "cloudiary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (locaFilePath) => {
  try {
    if (!locaFilePath) {
      return null;
    }

    const res = await cloudinary.uploadoer.upload(locaFilePath, {
      resource_type: auto,
    });
    console.log("file uploaded on cloudinary : ", res.url);
    return res;
  } catch (err) {
    fs.unlinkSync(locaFilePath); // remove local file if the  operation failed
    console.log("cloudinary upload failed", err.message);
  }
};

export { uploadOnCloudinary };
