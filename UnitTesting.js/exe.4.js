const {expect} = require('chai');
const mathEnforcer = require('./04e');

describe('functions', ()=>{
    describe('addFive',()=>{
        it('is not a number',()=>{
            expect(mathEnforcer.addFive('1')).to.equal(undefined)
        })
        it('is a number return + 5', ()=>{
            expect(mathEnforcer.addFive(1)).equal(6)
        })
        it('is a number return + 5', ()=>{
            expect(mathEnforcer.addFive(1.2)).equal(6.2)
        })
        it('is a number return + 5', ()=>{
            expect(mathEnforcer.addFive(-5)).equal(0)
        })
        
    })

    describe('subtractTen', ()=>{
        it('is not a number',()=>{
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined)
        })
        it('is not a number',()=>{
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined)
        })
        it('result', ()=>{
            expect(mathEnforcer.subtractTen(20)).equal(10)
        })
        it('result', ()=>{
            expect(mathEnforcer.subtractTen(0)).equal(-10)
        })
        it('result', ()=>{
            expect(mathEnforcer.subtractTen(10.2)).equal(0.1999999999999993)
        })
        it('result', ()=>{
            expect(mathEnforcer.subtractTen(-5)).equal(-15)
        })
        
    })

    describe('sum', ()=>{
        it('if is not a number',()=>{
            expect(mathEnforcer.sum(1,'1')).equal(undefined)
        })
        it('if is not a number',()=>{
            expect(mathEnforcer.sum('2','1')).equal(undefined)
        })
        it('if is not a number',()=>{
            expect(mathEnforcer.sum('1',1)).equal(undefined)
        })
        it('if is not a number',()=>{
            expect(mathEnforcer.sum('1',undefined)).equal(undefined)
        })
        it('if is not a number',()=>{
            expect(mathEnforcer.sum(undefined,1)).equal(undefined)
        })
        it('if is not a number',()=>{
            expect(mathEnforcer.sum(undefined,undefined)).equal(undefined)
        })
        
        it('if is number',()=>{
            expect(mathEnforcer.sum(1,1)).equal(2)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(-1,1)).equal(0)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(1,0)).equal(1)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(1.2,1.3)).equal(2.5)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(-1.2,-1.3)).equal(-2.5)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(-1.2,1)).equal(-0.19999999999999996)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(1,-1)).equal(0)
        })
        it('if is number',()=>{
            expect(mathEnforcer.sum(-1,-1)).equal(-2)
        })
    })
})