function calculateChickenPrice() {
    let weightInGrams = prompt("ap yahan gram darj karan");
    if (!weightInGrams || weightInGrams <= 0) {
        alert(" drost wazan darj karan");
        return;
    }

    let price = weightInGrams / 1000 * 500; // قیمت حساب کریں (وزن کلوگرام * کلو کلوگرام کی قیمت)
    alert("ap ko" + price + " ropa ada karna ho ga" + weightInGrams + "gram ki morgi ka leya");
}