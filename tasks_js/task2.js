// Функція для отримання деталей товару за його ID
function getProductDetails(productId, successCallback, errorCallback) {
  // Масив з даними про товари  
  const products = [
      { id: 1, name: "Товар 1", price: 100 },
      { id: 2, name: "Товар 2", price: 200 },
      { id: 3, name: "Товар 3", price: 300 },
      { id: 4, name: "Товар 4", price: 400 },
      { id: 5, name: "Товар 5", price: 500 },
    ];
  // Шукаємо товар в масиві за його ID
    const product = products.find(item => item.id === productId);
  // Якщо товар знайдено, викликаємо успішний зворотній виклик, інакше - виклик помилки
    if (product) {
      successCallback(product);
    } else {
      errorCallback("Товар не знайдено");
    }
}

// Функція для обробки успішного отримання даних товару
function successCallback(product) {
    console.log("Деталі товару:", product);
}
// Функція для обробки помилки, якщо товар не знайдено
function errorCallback(errorMessage) {
    console.log("Помилка:", errorMessage);
}
