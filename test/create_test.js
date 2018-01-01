const assert = require('assert');
const User = require('../src/user');

describe('Creating a records', (done) => {
    it('save a user', () =>{
        //assert(1+1 === 2)
        const santosh = new User({ name : "Santosh "});
        santosh.save().then(()=>{
            assert(!santosh.isNew);
            done();
        })
    })
});