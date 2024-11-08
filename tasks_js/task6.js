// Масив об'єктів, що містять назву і ціну ліків
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

/*
    Функція applyDiscount:
    1. Приймаємо масив ліків як аргумент.
    2. Для кожного ліка перевіряємо його ціну.
    3. Якщо ціна ліків перевищує 300, застосовуємо знижка 30% (ціну множимо на 0.7).
    4. Повертаємо новий об'єкт, який включає id (індекс + 1), назву ліків та ціну після застосування знижки.
    5. Якщо ціна менша або рівна 300, ліки повертаються без змін, лише з id.
*/
function applyDiscount(medicines) {
    return medicines.map((medicine, index) => {
        if (medicine.price > 300) {
            const discountPrice = medicine.price * 0.7;
            return { id: index + 1, name: medicine.name, price: discountPrice };
        }
        return { id: index + 1, name: medicine.name, price: medicine.price };
    });
}

// Функція, що викликає applyDiscount і виводить результат
function callFunction1() {
    console.log(medicines);
    const discountedMedicines = applyDiscount(medicines);
    console.log(discountedMedicines);
}