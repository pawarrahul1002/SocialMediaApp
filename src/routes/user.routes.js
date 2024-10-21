import { Router } from "express";
import { registerUser, loginUser, logoutUser, getProfile, refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

userRouter.post("/login", loginUser );
userRouter.post("/logout",verifyJWT, logoutUser );
userRouter.get("/profile",verifyJWT, getProfile );
userRouter.post("/refreshAccess",refreshAccessToken);

export default userRouter;
