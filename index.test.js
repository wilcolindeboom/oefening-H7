
const {smallestCommonMultiple} = require('./index');

 test("Find smallest common multiple of 2 numbers ", () => {

//arrange

 const a = 5;
 const b = 10;

 //act

 const result = smallestCommonMultiple(a,b);

//assert

 expect(result).toBe(10);

})

















