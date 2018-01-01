const mongoose = require('mongoose');

const option = {
    promiseLibrary :global.Promise,
    useMongoClient :true
}

before((done)=>{
    mongoose.connect('mongodb://localhost/user_test',option).then(() =>{} );
    mongoose.connection
        .once('open', () => { console.log('MongoDB Connected'); done(); })
        .on('error', (err) => {
            console.log('Error in connecting to mongoDB');
        })    
})

beforeEach((done) => {
    mongoose.connection.collections.users.drop(()=>{
        done();
    });
})