const {expect} = require('chai');
const rgbToHexColor = require('./06');

describe('functions', ()=>{
    it('isTrue',()=>{
        expect(rgbToHexColor('a',2,50)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(-1,2,50)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(260,2,50)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(2,'d',50)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(3,-3,50)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(3,260,50)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(3,2,'a')).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(5,2,-7)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(4,2,270)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(NaN,2,45)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(1,1,1)).equal('#010101');
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(3,NaN,45)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(5,2,NaN)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(NaN,NaN,NaN)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(undefined,2,45)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(-2,-30,-45)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(290,290,450)).equal(undefined);
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(255,158,170)).equal('#FF9EAA');
    })
    it('isTrue',()=>{
        expect(rgbToHexColor(255,0,0)).equal('#FF0000');
    })

})
