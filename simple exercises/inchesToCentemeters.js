function yard(input) {
    let squareKm = Number(input[0]); // 550 
    let totalPrice = squareKm * 7.61; // 550 * 7.61 
    let discount = totalPrice * 0.18; 
    let result = totalPrice - discount;

    console.log(discount);
    console.log(result);
}

yard(["550"])