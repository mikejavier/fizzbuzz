import { expect } from 'chai'
import fizzbuzz from '../src/main'

describe('Main.js', () => {

  describe('Smoke Tests', () => {

    it('should fizzbuzz is function', () => {
      expect(fizzbuzz).to.be.a('function')
    })

  })

  it('should return 0 when input number is 0', () => {
    expect(fizzbuzz(0)).to.equal(0)
  })

  it('should return "Fizz" when multiple of 3 ', () => {
    expect(fizzbuzz(3)).to.equal('Fizz')
  })

  it('should return "Buzz" when multiple of 5 ', () => {
    expect(fizzbuzz(5)).to.equal('Buzz')
  })

  it('should return "FizzBuzz" when multiple of 3 and 5 ', () => {
    expect(fizzbuzz(15)).to.equal('FizzBuzz')
  })

  it('should return input number if not multiple of 3 or 5 ', () => {
    expect(fizzbuzz(7)).to.equal(7)
  })

})
