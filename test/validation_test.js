const assert = require('assert');
const User = require('../src/user');

describe('validating records ',(done)=>{
    it('requires a username ',(done)=>{
        const user = new User({'name':undefined});
        const validationResults = user.validateSync();
        const { message } = validationResults.errors.name;
        assert(message == 'Name is required.');
        done();
    });

    it('requires a user\'s name longer than 2 charactors',(done)=>{
        const user = new User({'name':'SA'});
        const validationResults = user.validateSync();
        const { message } = validationResults.errors.name;
        assert(message == 'Name must be longer than 2 charactors.');
        done();
    });

    it('disallows invalid records from being saved',(done)=>{
        const user = new User({'name':'SA'});
        user.save().catch((validationResults)=>{
            const { message } = validationResults.errors.name;
            assert(message == 'Name must be longer than 2 charactors.');
            done();
        })
        
        
        
        
    });
})