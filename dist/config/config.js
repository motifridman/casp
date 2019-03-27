var env = process.env.NODE_ENV || 'development';
console.log('env ******', env);
if (env === 'development') {
    //@ts-ignore  
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/CaspApp';
}
else if (env === 'test') {
    //@ts-ignore  
    process.env.port = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/CaspAppTest';
}
