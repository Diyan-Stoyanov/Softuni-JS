const {expect} = require('chai');
const pizzUni = require('./piz');

describe('functions',()=>{
    describe('makeAnOrder',()=>{
        it('isFalse',()=>{
            expect(() => pizzUni.makeAnOrder({orderedDrink:'aa'})).to.throw(`You must order at least 1 Pizza to finish the order.`)
        })
        it('isTrue',()=>{
            expect(pizzUni.makeAnOrder({orderedPizza:'a',orderedDrink:'b'})).equal( `You just ordered a and b.`)
        })
    })

    describe('getRemainingWork',()=>{
        it('ready or prepearing',()=>{
            expect(pizzUni.getRemainingWork([{pizzaName: 'b', status: 'ready' }])).equal('All orders are complete!')
        })
        it('ready or prepearing',()=>{
            expect(pizzUni.getRemainingWork([{pizzaName: 'b', status: 'preparing' }])).equal( `The following pizzas are still preparing: b.`)
        })
    })

    describe('orderType',()=>{
        it('caryOut',()=>{
            expect(pizzUni.orderType(10, 'Carry Out')).equal(9)
        })
        it('caryOut',()=>{
            expect(pizzUni.orderType(10, 'Delivery')).equal(10)
        })
    })
})
