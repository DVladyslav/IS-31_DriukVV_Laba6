const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

function applyDiscount(medicines) {
    return medicines.map((medicine, index) => {
        if (medicine.price > 300) {
            const discountPrice = medicine.price * 0.7;
            return { id: index + 1, name: medicine.name, price: discountPrice };
        }
        return { id: index + 1, name: medicine.name, price: medicine.price };
    });
}

function callFunction1() {
    const discountedMedicines = applyDiscount(medicines);
    console.log(discountedMedicines);
}