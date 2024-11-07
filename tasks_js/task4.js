const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

function callFunction1() {
    const cities = Object.keys(concerts);
    console.log("Виклик функції 1:", cities);
}

function callFunction2() {
    const upcomingConcertCities = Object.entries(concerts)
        .filter(([city, date]) => date > new Date())
        .sort(([, dateA], [, dateB]) => dateA - dateB)
        .map(([city]) => city);

    console.log("Виклик функції 2:", upcomingConcertCities);
}
