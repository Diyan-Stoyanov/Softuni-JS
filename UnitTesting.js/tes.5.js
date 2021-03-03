const {expect} = require('chai');
const isSymmetric = require('./tes5');

describe('work',()=>{
    it('work', ()=>{
        expect([]).to.deep.equal([])
    })
    it('true or false', ()=>{
        expect(isSymmetric('a')).to.equal(false)
    })
    it('return true is a symetric', () =>{
        expect(isSymmetric([1,1])).equal(true)
    })
    it('false',()=>{
        expect(isSymmetric([2,1,4])).equal(false)
    })
    it('true', () =>{
        expect(isSymmetric([1,'1'])).equal(false)
    })
})
