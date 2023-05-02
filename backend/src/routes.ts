import multer from "multer";
import { Router } from "express";

import uploadConfig from "./config/multer";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

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

routers.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

// Rotas order
routers.post("/order", isAuthenticated, new CreateOrderController().handle);

routers.delete("/order", isAuthenticated, new RemoveOrderController().handle);

routers.post("/order/add", isAuthenticated, new AddItemController().handle);

routers.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);

routers.put("/order/send", isAuthenticated, new SendOrderController().handle);

routers.get("/orders", isAuthenticated, new ListOrdersController().handle);

routers.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);

routers.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

export { routers };
