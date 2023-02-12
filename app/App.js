import { ImgController } from "./Controllers/ImgController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  quoteController = new QuoteController()
  timeController = new TimeController()
  imgController = new ImgController()
  todosController = new TodosController()
  weatherController = new WeatherController()
}

window["app"] = new App();
