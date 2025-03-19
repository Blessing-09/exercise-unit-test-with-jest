const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('one euro should be 1.07 dollars', () => {
    let exchange = fromEuroToDollar(100);
    expect(exchange).toBe(107.00);
});

test('one dollar should be 146.26 yen', () => {
    let exchange = fromDollarToYen(3.5);
    expect(exchange).toBe(511.92);
});

test('one yen should be 0.01 pounds', () => {
    let exchange = fromYenToPounds(3.5);
    expect(exchange).toBe(0.02);
});