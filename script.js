let taskNameInput = document.querySelector("#task-name-input");
      let addTaskButton = document.querySelector("#add-task-btn");
      let startMessage = document.querySelector("#start-message");
      let taskList = document.querySelector(".task-list");
      let undoneBtn = document.querySelector("#undone-task");
      let allTasks = document.querySelector("#all-tasks");
      let tasks = [];
      let img = document.querySelector("img");
      let todayDate = document.querySelector(".today-date");
      let localTime = document.querySelector(".local-time");
      function zeroFormat(value)
      {
          if (value < 10)
          {
              value='0'+value;
          }
          return value;
      }
      const tick = () => {
        const now = new Date();
        const hours = zeroFormat(now.getHours());
        const min = zeroFormat(now.getMinutes());
        const sec = zeroFormat(now.getSeconds());
    
            localTime.textContent = `${hours}:${min}:${sec}`;
        
    }
    
    tick();
    
    setInterval(tick, 1000);
      

     let today = new Date();
    let formDate = options = { day: "numeric", month: "long", year: "numeric"};
    let now = today.toLocaleString('ru-Ru',formDate);
     todayDate.append(now);



    
    //  вывод полезностей

     let smartWords = ["Чем умнее человек, тем легче он признает себя дураком. Альберт Эйнштейн",
     "Никогда не ошибается тот, кто ничего не делает. Теодор Рузвельт",
     "Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь? Стив Джобс",
      "Мода проходит, стиль остаётся. Коко Шанель","«Если человек не нашёл, за что может умереть, он не способен жить». Мартин Лютер Кинг",
     "«Музыка заводит сердца так, что пляшет и поёт тело. А есть музыка, с которой хочется поделиться всем, что наболело». Джон Леннон",
     "«Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага». Лао-цзы",
     "«Лучше быть хорошим человеком, ругающимся матом, чем тихой, воспитанной тварью». Фаина Раневская",
     "«Когда я собираюсь писать новый сценарий, самое трудное для меня – это пойти в канцтовары и купить блокнот». Квентин Тарантино",
     "«Успех – паршивый учитель. Он заставляет умных людей думать, что они не могут проиграть». Билл Гейтс",
     "«Перспектива рано умереть заставила меня понять, что жизнь стоит того, чтобы её прожить». Стивен Хокинг"
    ];
    let movieChoise = ["Зеленая миля,драма,1999, США",
    "Аватар 2: Путь воды,приключения, боевик, фантастика,2022, США",
    "1+1 ,комедия, драма, биография 2011, Франция",
    "Побег из Шоушенка,драма, триллер 1994, США",
    "Изгой, приключения, драма 2000, США",
    "FORD против FERRARI, биография, драма, спорт 2019, США",
    "Назад в будущее, приключения, фантастика, комедия, боевик 1985, США",
    "Молчание ягнят,триллер, криминал 1991, США",
    "Джентльмены, боевик, криминал 2020, США",
    "Унесенные призраками,аниме , семейный, анимация, приключения 2001, Япония"
  ]
  let bookChoice = ["451° по Фаренгейту  Рэй Брэдбери",
"Шантарам Грегори Дэвид Робертс",
"Портрет Дориана Грея Оскар Уайльд",
"Граф Монте-Кристо Александр Дюма",
"Великий Гэтсби Фрэнсис Скотт Фицджеральд",
"Гордость и предубеждение Джейн Остин",
"Марсианин Энди Вейер",
"Понедельник начинается в субботу Аркадий Стругацкий,Борис Стругацкий",
"Игра престолов Джордж Р. Р. Мартин",
"Властелин колец Джон Рональд Руэл Толкин"

];
let words = document.querySelector(".word");
let movie = document.querySelector(".movie");
let book = document.querySelector(".book");

function createChoice(){
  let num =  Math.floor(Math.random() * 9);

  words.append(smartWords[num]);
  movie.append(movieChoise[num]);
  book.append(bookChoice[num]);

 
}
createChoice(smartWords,movieChoise,bookChoice);



     

      addTaskButton.addEventListener("click", addTaskHandler);

      taskNameInput.addEventListener("keydown", function (e) {
        if (e.code == "Enter") addTaskHandler();
      });

      function addTaskHandler() {
        if (taskNameInput.value) {
          if (!startMessage.hidden) startMessage.hidden = true;

          let newTask = new Task(taskNameInput.value);
          newTask.createIn(taskList);
          tasks.push(newTask);

          taskNameInput.value = "";
        } else {
          alert("введите имя задачи");
        }
      }

      class Task {
        constructor(text) {
          this.text = text;
          this.isDone = false;
          this.div = null;
        }

        createIn(element) {
          this.div = document.createElement("div");
          this.div.classList.add("task");

          // let input = document.createElement("input");
          // input.addEventListener("click", () => this.changeState(this.div));
          // input.type = "checkbox";
          // input.classList.add("input-by-task");

          let checkBox = document.createElement("button");
          checkBox.addEventListener("click", () => this.changeState(this.div)); 
          checkBox.type = "checkbox";
          checkBox.classList.add("input-by-task");

          let p = document.createElement("p");
          p.innerText = this.text;
          let timeLimit = document.createElement("input");
          timeLimit.type = "date";
          timeLimit.classList.add("limit");


          let btn = document.createElement("button");
          btn.classList.add("cancel");
          let btnP = document.createElement("p");
          btnP.innerText = "X";

          // this.div.append(input);
          this.div.append(checkBox);
          this.div.append(p);
          this.div.append(timeLimit);
          this.div.append(btn);
          btn.append(btnP);
          element.append(this.div);
         
          btn.addEventListener("click", function (){ 
         
            
            
            btn.parentElement.remove();
        })
         

        }

        changeState(element) {
          this.isDone = !this.isDone;
          element.classList.toggle("completed");
    


        }
        
      }
      
    
      function showNotDoneTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
            if (task.isDone == false) {
                taskList.append(task.div);
            }
        }
    )
 
}

undoneBtn.addEventListener("click", showNotDoneTasks);
    


function showAllTasks() {
    tasks.forEach(task => {
            taskList.append(task.div);
        }
    )
};
allTasks.addEventListener("click", showAllTasks);




  

