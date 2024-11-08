// Конструктор Storage для створення об'єкта сховища з початковим набором елементів
function Storage(initialItems) {
    this.items = initialItems;

    // Метод для отримання всіх елементів зі сховища
    this.getItems = function () {
        return this.items;
    };

    // Метод для додавання нового елемента до сховища
    this.addItem = function (item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
            console.log(`Товар "${item}" успішно додано.`);
        } else {
            console.log(`Товар "${item}" вже існує.`);
        }
    };

    // Метод для видалення елемента зі сховища
    this.removeItem = function (item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
            console.log(`Товар "${item}" видалено.`);
        } else {
            console.log(`Товар "${item}" не знайдено.`);
        }
    };
}

// Масив початкових елементів
const arr = ["apple", "banana", "mango"]
const storage = new Storage(arr);

// Функція для виклику методу getItems та виведення списку елементів
function callFunction1() {
    const arrayItems = storage.getItems();
    console.log(arrayItems);
}
// Функція для виклику методу addItems, додавання нового елемента та виведення списку
function callFunction2(item) {
    if (item) {
        storage.addItem(item);
    }
    console.log(storage.getItems());
}
// Функція для виклику методу removeItem, видалення елемента та виведення списку
function callFunction3(item) {
    if (item) {
        storage.removeItem(item);
    }
    console.log(storage.getItems());
}