
const Lists = (redis) => {
    redis.del('planets');

    redis.rpush("planets", "venus", "mars", "earth", "neptune");
    redis.lpush("planets", "saturn");
    redis.rpush('planets', 'mercury');

    redis.lrange('planets', 0, -1, (err, result) => {
        console.log(result);
    });

    redis.rpop('planets', (err, result) => {
        console.log(result);
    });

}

export default Lists;