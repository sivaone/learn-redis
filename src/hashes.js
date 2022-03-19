
const Hashes = (redis) => {
    redis.hmset("user:101", "name", "siva", "city", "Hyd", "pincode", 500085);
    redis.hgetall("user:101", (err, result) => {
        console.log("hash : " + JSON.stringify(result));
    })
    redis.hmget("user:101", "name", "city", (err, result) => {
        console.log("name city : " + JSON.stringify(result));
    })
}

export default Hashes;