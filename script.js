class Machine {
  constructor(info) {
    this.state = "stopped";
    this.time = 2000;
    this.interval = null;
    this.timer = null;
    // this.info = info;
  }

  onReady = () => {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    info.innerHTML += "Готово! ";
    this.state = "stopped";
    info.innerHTML += this.state;
  };

  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    info.innerHTML += "Принудительное выключение! ";
    this.state = "stopped";
    info.innerHTML += this.state;
  }

  run() {
    this.state = "started";
    info.innerHTML += "Начинаю работу...";
    info.innerHTML += "Время приготовления - " + this.time + " ";
    this.interval = setInterval(() => {
      info.innerHTML += " | ";
    }, 1000); // стрелочная функция не имеет своего контекста объекта и берет контекст объекта, находящегося выше по иерархии - объект класса Machine, то есть передавать контекст (this.onReady.bind(this)) не нужно
    //this.timer = setTimeout(this.onReady.bind(this), this.time);

    this.timer = setTimeout(this.onReady, this.time);
    info.innerHTML += this.state;
  }
}

// var machine = new Machine();
// machine.run();

class CofeeMachine extends Machine {
  constructor(info) {
    // вызов конструктора родительского класса
    super();
    this.drink = "вода";
  }

  run(drink) {
    try {
      if (this.state == "started") {
        //this.info.innerHTML += 'Машина занята!';
        throw new Error("Машина занята!");
        //setTimeout(function (){(new CoffeeMachine(info)).run(drink)}, this.time);
      } else if (drink != undefined) {
        this.drink = drink;
        info.innerHTML += "Приготовление: " + this.drink + " ";
        switch (drink) {
          case (drink = "latte"):
            this.time = 5000;
            break;
          case (drink = "espresso"):
            this.time = 3000;
            break;
          default:
            alert("напиток не найден");
            break;
        }

        super.run();
      }
    } catch (ex) {
      info.innerHTML += ex.message;
    }
  }
}

class Multivariate extends Machine {
  constructor(info) {
    // вызов конструктора родительского класса
    super();
    this.dish = "суп";
  }

  run(dish) {
    try {
      if (this.state == "started") {
        //this.info.innerHTML += 'Машина занята!';
        throw new Error("Машина занята!");
        //setTimeout(function (){(new CoffeeMachine(info)).run(dish)}, this.time);
      } else if (dish != undefined) {
        this.dish = dish;
        info.innerHTML += "Приготовление: " + this.dish + " ";
        switch (dish) {
          case (dish = "soup"):
            this.time = 2000;
            break;
          case (dish = "bake"):
            this.time = 3000;
            break;
          case (dish = "stew"):
            this.time = 5000;
            break;
          default:
            alert("блюдо не найдено");
            break;
        }

        super.run();
      }
    } catch (ex) {
      info.innerHTML += ex.message;
    }
  }
}
var cofeeMachine = new CofeeMachine();
var multivariate = new Multivariate();
