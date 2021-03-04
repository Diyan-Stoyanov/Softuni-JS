const {expect} = require('chai');
const dealership = require('./ex');


describe('functions',()=>{
    describe('newCar',()=>{
        it('string and number',()=>{
            expect(dealership.newCarCost('a', 5)).equal(5)
        })
        it('price',()=>{
            expect(dealership.newCarCost('Audi A4 B8',30000)).equal(15000)
        })
    })
    describe('carEquipment',()=>{
        it('correct',()=>{
            expect(dealership.carEquipment(['a','b','c'],[0,2])).to.deep.equal(['a','c'])
        })
        it('correct',()=>{
            expect(dealership.carEquipment(['a','b','c'],[0])).to.deep.equal(['a'])
        })
        it('correct',()=>{
            expect(dealership.carEquipment(['a'],[0])).to.deep.equal(['a'])
        })
    })
    describe('euroCategory',()=>{
        it('>4',()=>{
            expect(dealership.euroCategory(6)).equal( `We have added 5% discount to the final price: 14250.`)
        })
        it('>4',()=>{
            expect(dealership.euroCategory(4)).equal( `We have added 5% discount to the final price: 14250.`)
        })
        it('<4',()=>{
            expect(dealership.euroCategory(3)).equal(`Your euro category is low, so there is no discount from the final price!`)
        })
    })
})
