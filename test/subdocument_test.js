const assert = require('assert');
const User = require('../src/user');

describe('subdocuments',()=>{
    it('can create a sub document ',()=>{
        const santosh = new User({
            name:'santosh suryawanshi',
            posts:[{title:'firstPost',content:'first content'}]
        });

        santosh.save().then((users)=>{
            assert(users.post.title === "firstPost");
            done();
        });
    });
})