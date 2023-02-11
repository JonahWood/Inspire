import { ImgController } from "./Controllers/ImgController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  timeController = new TimeController()
  imgController = new ImgController()
  todosController = new TodosController()
  weatherController = new WeatherController()
}

window["app"] = new App();
