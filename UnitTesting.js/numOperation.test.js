const {expect} = require('chai');
const numberOperations = require('./zadacha')

describe('functions',()=>{
    describe('powNumber',()=>{
        it('isValid',()=>{
            expect(numberOperations.powNumber(5)).equal(25)
        })
        it('isValid',()=>{
            expect(numberOperations.powNumber(5.5)).equal(30.25)
        })
        it('isValid',()=>{
            expect(numberOperations.powNumber(1)).equal(1)
        })
        it('isValid',()=>{
            expect(numberOperations.powNumber(-1)).equal(1)
        })
    })

    describe('numberChecker',()=>{
        it('isNaN',()=>{
            expect(() => numberOperations.numberChecker('r')).to.throw('The input is not a number!')
        })
        it('isNaN',()=>{
            expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!')
        })
        it('input < 100',()=>{
            expect(numberOperations.numberChecker(5)).equal('The number is lower than 100!')
        })
        it('input > 100',()=>{
            expect(numberOperations.numberChecker(101)).equal('The number is greater or equal to 100!')
        })
        it('input = 100',()=>{
            expect(numberOperations.numberChecker(100)).equal('The number is greater or equal to 100!')
        })
    })

    describe('sumArrays',()=>{
        it('sum',()=>{
            expect(numberOperations.sumArrays([5,5,5],[5,5])).deep.equal([10,10,5])
        })
    })
})
