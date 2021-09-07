const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

test("One euro should be 1.2 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One yen should be 106.58 punds", function(){
    expect(fromDollarToYen(1.2)).toBe(127.9);
});

test("One yen should be 0.006 punds", function(){
    expect(fromYenToPound(127.9)).toBe(0.8);
});