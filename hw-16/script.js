// оголошуємо змінні для елементів HTML
const categories = document.querySelectorAll(".category");
const productsContainer = document.querySelector(".products");
const productDetails = document.getElementById("productDetails");
const buyButton = document.getElementById("buyButton");
const purchaseMessage = document.getElementById("purchaseMessage");

// обробник кліку на категорію
function categoryClicked() {
  // очистити список товарів
  productsContainer.innerHTML = "";

  // видалити активний клас з усіх кнопок категорій
  categories.forEach(function (button) {
    button.classList.remove("active");
  });

  // додати активний клас кнопці, яку натиснули
  this.classList.add("active");

  // отримати ім'я категорії, яку вибрали
  const categoryName = this.dataset.category;

  // вивести список товарів категорії
  showProductsByCategory(categoryName);
}

// функція виведення списку товарів категорії
function showProductsByCategory(categoryName) {
  // Отримати список товарів для відображення
  const products = getProductsByCategory(categoryName);

  // Створити HTML для кожного товару та додати до списку товарів
  products.forEach(function (product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Ціна: ${product.price} грн.</p>`;
    productsContainer.appendChild(productElement);
    // додати обробник кліку на товар
    productElement.addEventListener("click", function () {
      // відобразити детальну інформацію про товар
      showProductDetails(product);

      // показати кнопку "купити"
      buyButton.style.display = "block";
    });
  });
}

// функція отримання списку товарів категорії
function getProductsByCategory(categoryName) {
  // Замість реального запиту до сервера з БД магазину, просто створимо об'єкт з детальною інформацією про товар
  const products = {
    electronics: [
      {
        id: 1,
        name: "Ноутбук",
        description: "Можливо, кращий ноутбук у світі",
        price: 10000,
        image: "https://example.com/images/laptop.jpg",
      },
      {
        id: 4,
        name: "Смартфон",
        description: "Хороший смартфон",
        price: 300,
        image: "https://example.com/images/smartphone.jpg",
      },
    ],
    clothing: [
      {
        id: 2,
        name: "Футболка",
        description: "Класна футболка",
        price: 200,
        image: "https://example.com/images/tshirt.jpg",
      },
    ],
    books: [
      {
        id: 3,
        name: "Книга",
        description: "Цікава книга",
        price: 300,
        image: "https://example.com/images/book.jpg",
      },
    ],
  };

  return products[categoryName];
}

// функція виведення детальної інформації про товар
function showProductDetails(product) {
  productDetails.innerHTML =`<h2>${product.name}</h2> <img src="${product.image}" alt="${product.name}"> <p>${product.description}</p> <p>Ціна: ${product.price} грн.</p>`;
}

// обробник кліку на кнопці "купити"
function buyButtonClicked() {
// приховати кнопку "купити"
buyButton.style.display = "none";

// вивести повідомлення про покупку
purchaseMessage.innerHTML = "Ви успішно купили товар!";

// очистити детальну інформацію про товар
productDetails.innerHTML = "";
}

// додати обробник кліку на кнопці "купити"
buyButton.addEventListener("click", buyButtonClicked);

// додати обробники кліку на кнопки категорій
categories.forEach(function (button) {
button.addEventListener("click", categoryClicked);
});

// відобразити всі товари при запуску програми
showProductsByCategory("electronics");