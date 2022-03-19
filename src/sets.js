
const Sets = (redis) => {
    redis.del('tags');
    redis.sadd("tags", "java", "spring", "hibernate", "jsp");

    redis.smembers('tags', (err, result) => {
        console.log(result);
    })

    redis.spop('tags', (err, result) => {
        console.log(result);
    })
}

export default Sets;