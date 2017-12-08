// FizzBuzz
// - print th enumbers 1 - 100
// - iF the number is divisible by 3, print fizz instead of the number
// - if the numnber diviisible by 5, print buzz instead of the number
// - if the numnber is divisible by 3 & 5, print fizzbuzz instead of the number

describe("FizzBuzz Unit Tests", ()=>{
    // here is where we start writing the tests for this suite
    // we write a test by starting (usually) with it
    // "it" takes 2 args
    // 1. Name of the test
    // 2. The function to run (which is the test)
    it("FizzBuzz must be defined", ()=>{
        // expect takes 1 args... something to evaluate
        // we chain a method on expect
        expect(fizzBuzz()).toBeDefined();
    })
})