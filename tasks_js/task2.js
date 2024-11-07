function getProductDetails(productId, successCallback, errorCallback) {
    const products = [
      { id: 1, name: "Товар 1", price: 100 },
      { id: 2, name: "Товар 2", price: 200 },
      { id: 3, name: "Товар 3", price: 300 },
    ];
  
    const product = products.find(item => item.id === productId);
  
    if (product) {
      successCallback(product);
    } else {
      errorCallback("Товар не знайдено");
    }
}

function successCallback(product) {
    console.log("Деталі товару:", product);
}

function errorCallback(errorMessage) {
    console.log("Помилка:", errorMessage);
}
