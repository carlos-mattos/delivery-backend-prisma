import { Router } from "express";
import ensureAuthenticateClient from "./middlewares/ensureAuthenticateClient";
import ensureAuthenticateDeliveryman from './middlewares/ensureAuthenticateDeliveryman';
import AuthenticateClientController from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import AuthenticateDeliverymanController from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import CreateClientController from "./modules/clients/useCases/createClient/CreateClientController";
import FindAllDeliveriesController from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
import CreateDeliveryController from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import FindAllAvailableController from './modules/deliveries/useCases/findAllWithoutEndDate/FindAllAvailableController';
import UpdateDeliveryManController from './modules/deliveries/useCases/updateDeliveryMan/UpdateDeliveryManController';
import CreateDeliverymanController from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import FindAllDeliveriesDeliverymanController from './modules/deliveryman/useCases/findAllDeliveries/FIndAllDeliveriesDeliverymanController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController()
const updateDeliveryManController = new UpdateDeliveryManController();
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

routes.post("/client/auth", authenticateClientController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);

routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get("/delivery", ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.put("/delivery/:id_delivery", ensureAuthenticateDeliveryman, updateDeliveryManController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

export default routes;
