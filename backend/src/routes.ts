import multer from "multer";
import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const routers = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas user
routers.post("/users", new CreateUserController().handle);

routers.post("/session", new AuthUserController().handle);

routers.get("/user-info", isAuthenticated, new DetailUserController().handle);

// Rotas category
routers.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

routers.get(
  "/categories",
  isAuthenticated,
  new ListCategoryController().handle
);

// Rotas product
routers.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

export { routers };
