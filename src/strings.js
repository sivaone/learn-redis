
const Strings = (redis) => {
    redis.set('name', 'siva', 'EX', 5);
    redis.get('name', (err, result) => {
        console.log("name : " + result);
    });

    redis.incrby('address', 300);
    redis.get('address', (err, result) => {
        console.log("address : " + result);
    });
}

export default Strings;