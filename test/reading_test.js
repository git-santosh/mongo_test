const assert = require('assert');
const User = require('../src/user');

let santosh;
describe('reading user out of database ',()=>{
    beforeEach('',(done)=>{
        santosh = new User({ name : "Santosh" , postCount:20});
        santosh.save().then(()=>{
            assert(!santosh.isNew);
            done();
        })
    });

    it('find all the user with name santosh', (done)=>{
        User.find({name:'Santosh'})
        .then((user)=>{
            assert(santosh._id.toString() === user[0]._id.toString())
            done();
        })
    });

    it('find particular user',(done)=>{
        User.findOne({name:'Santosh'})
        .then((user)=>{
            assert(user.name === 'Santosh');
            done();

        })
    });
    it('postcount increment by 10',(done)=>{
        User.findOneAndUpdate({'name':'Santosh'},{$inc:{postCount : 10}},{new:true}).lean().exec().then((users)=>{
          
            assert(users.postCount === 30);
            done();
        })
    })
})