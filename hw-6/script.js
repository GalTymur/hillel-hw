let userYear = prompt("Введіть рік свого народження:");
let userCity = prompt("Введіть місто, де ви живете:");
let userSport = prompt("Введіть свій улюблений вид спорту:");

if (userYear === null || userCity === null || userSport === null) {
  alert("Шкода, що Ви не захотіли ввести свій(ю) " +
        (userYear === null ? "рік народження" : "") +
        (userCity === null ? (userYear === null ? " та " : "") + "місто" : "") +
        (userSport === null ? (userYear === null || userCity === null ? " та " : "") + "улюблений вид спорту" : "") +
        ".");
} else {
  let age = new Date().getFullYear() - userYear;
  let capitalMassage = "";

  switch (userCity) {
    case "Київ":
        capitalMassage = "Україна";
      break;
    case "Вашингтон":
        capitalMassage = "США";
      break;
    case "Лондон":
        capitalMassage = "Велика Британія";
      break;
  }
  if (capitalMassage !== "") {
    alert("Ваш вік: " + age + "\nТи живеш у столиці " + capitalMassage + ".");
  } else {
    alert("Ваш вік: " + age + "\nТи живеш у місті " + userCity + ".");
  }
  switch (userSport) {
    case "футбол":
      alert("Круто! Хочеш стати Дієго Марадона?");
      break;
    case "баскетбол":
      alert("Круто! Хочеш стати Майклом Джорданом?");
      break;
    case "бокс":
      alert("Круто! Хочеш стати Майк Тайсономпше іефегі?");
      break;
  }
}





