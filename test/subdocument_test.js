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
    it('it can add subdocumnt to an existing records ',(done)=>{
        User.findOne({name:'santosh suryawanshi'}).then((users)=>{
            users.posts.push({title:'new post'});
            return users.save();
        }).then(()=> User.findOne({name:'santosh suryawanshi'}))
        .then((user)=>{
            assert(user.posts[1].title === 'new post');
            done();
        });
    });
})