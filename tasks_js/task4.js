// Об'єкт, що містить міста та дати концертів
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Функція 1: Виводить список міст, де проходять концерти
function callFunction1() {
    const cities = Object.keys(concerts);   // отримуємо масив міст з об'єкта concerts
    console.log("Виклик функції 1:", cities);
}

// Функція 2: Виводить міста майбутніх концертів у порядку за датою
function callFunction2() {
    const upcomingConcertCities = Object.entries(concerts) 
        .filter(([city, date]) => date > new Date())      // фільтруємо майбутні концерти
        .sort(([, dateA], [, dateB]) => dateA - dateB)    // сортуємо за датою концерту
        .map(([city]) => city);                           // отримуємо масив міст

    console.log("Виклик функції 2:", upcomingConcertCities);
}
