const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23',() => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Euro should be 156.5 yens", function(){
    const { fromDollarToYen} = require('./app.js');

    const yens = fromDollarToYen(1000);

    const expected = 1000 * 156.5;

    expect(fromDollarToYen(1000)).toBe(156500);
})

test ("One Euro should be 0.87 pounds", function(){
    const {fromYenToPound} = require('./app.js');

    const pounds = fromYenToPound(100);

    const expected = 100 * 0.87;
    expect(fromYenToPound(100)).toBe(87);
})