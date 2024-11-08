// Функція для перевірки правильності закриття дужок у рядку
function checkBrackets(str) {
    console.log(str);
    const stack = [];          // створимо масив(стек) для зберігання відкритих дужок
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    for (let i = 0; i < str.length; i++) {   // ітеруємося по кожному символу рядка
        const char = str[i];
        if (openBrackets.includes(char)) {  // якщо символ є відкритою дужкою, додаємо його в стек
            stack.push(char);
        }
        else if (closeBrackets.includes(char)) { // якщо символ є закритою дужкою, видаляємо останню відкриту дужку зі стека
            const lastOpenBracket = stack.pop();
            // перевіряємо, чи відповідає остання відкрита дужка поточній закритій
            if (openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
                return false;
            }
        }
    }
    // якщо масив(стек) порожній після проходження всього рядка, всі дужки правильно паруються
    return stack.length === 0;
}

// Функції з різними вхідними рядками для перевірки
function callFunction1() {
    console.log(checkBrackets('str()string'));
}
function callFunction2() {
    console.log(checkBrackets('str({})string'));
}
function callFunction3() {
    console.log(checkBrackets('str([{}])string'));
}
function callFunction4() {
    console.log(checkBrackets('str([{])}string'));
}
function callFunction5() {
    console.log(checkBrackets('str([{})]string'));
}