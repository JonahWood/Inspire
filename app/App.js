// import { ImageController } from "./Controllers/ImageController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // imgController = new ImageController();
  todosController = new TodosController();
  weatherController = new WeatherController()
}

window["app"] = new App();
