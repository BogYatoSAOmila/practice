var x = 0;

function addDop() {
  var profile = document.getElementById("profile");
  var div = document.createElement("div");
  div.id = "dop" + ++x;
if (x==1) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course2"> <label for="course2" class="label">Курс2</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role2"> <label for="role2" class="label">Роль2</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  if (x==2) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course3"> <label for="course3" class="label">Курс3</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role3"> <label for="role3" class="label">Роль3</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  if (x==3) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course4"> <label for="course4" class="label">Курс4</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role4"> <label for="role4" class="label">Роль4</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  if (x==4) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course5"> <label for="course5" class="label">Курс5</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role5"> <label for="role5" class="label">Роль5</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  if (x==5) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course6"> <label for="course6" class="label">Курс6</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role6"> <label for="role6" class="label">Роль6</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  if (x==6) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course7"> <label for="course7" class="label">Курс7</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role7"> <label for="role7" class="label">Роль7</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  if (x==7) {
    div.innerHTML = '<div class="container"> <div class="inputContainer"> <input list="list1" type="text" class="input" placeholder="a" name="course8"> <label for="course8" class="label">Курс8</label> <datalist id="list1"> <option value="ОКАЭЦ"> <option value="ТвиМС"> <option value="Высшая математика"> <option value="Информационная экология"> <option value="Введение в ИТ"> <option value="Иностранный язык"> <option value="Электроника"> <option value="Правоведение"> </datalist> </div> <div class="inputContainer"> <input list="list2" type="text" class="input" placeholder="a" name="role8"> <label for="role8" class="label">Роль8</label> <datalist id="list2"> <option value="student"> </datalist> </div> </div>';
  }
  profile.append(div);
}

function delDop() {
  var div = document.getElementById("dop" + x);
  div.remove();
  --x;
}