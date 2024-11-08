// Масив об'єктів, де кожен об'єкт відображає твіт із унікальним id, кількістю лайків та тегами
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Функція countTags обчислює кількість використань кожного тегу у всіх твітах
const countTags = (tweets) => {
  return tweets.reduce((acc, tweet) => { // використовуємо reduce для підсумовування тегів у вигляді об'єкта
    tweet.tags.forEach(tag => {          // для кожного твіта ітеруємося по його тегах
      acc[tag] = (acc[tag] || 0) + 1;    // якщо тег вже є у об'єкті acc, збільшуємо його значення на 1, інакше ініціалізуємо значення 1
    });
    return acc;
  }, {});
};

// Функція для виклику countTags і виведення результату
function callFunction1() {
  const сountTags = countTags(tweets);
  console.log(сountTags);
};