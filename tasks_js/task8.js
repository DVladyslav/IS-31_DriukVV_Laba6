function Storage(initialItems){
    this.items = initialItems;

    this.getItems = function(){
        return this.items;
    };
    this.addItems = function(item){
        if (!this.items.includes(item)) {
            this.items.push(item);
            console.log(`Товар "${item}" успішно додано.`);
        } else {
            console.log(`Товар "${item}" вже існує.`);
        }
    };
    this.removeItem = function(item){
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
            console.log(`Товар "${item}" видалено.`);
        } else {
            console.log(`Товар "${item}" не знайдено.`);
        }
    }; 
}

const arr = ["apple", "banana", "mango"]
const storage = new Storage(arr);

function callFunction1() {
    const arrayItems = storage.getItems();
    console.log(arrayItems);
}
function callFunction2(item) {
    if (item) {
        storage.addItems(item);
    }
    console.log(storage.getItems());
}
function callFunction3(item) {
    if (item) {
        storage.removeItem(item);
    }
    console.log(storage.getItems());
}