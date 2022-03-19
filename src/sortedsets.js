
const SortedSets = (redis) => {
    redis.zadd("movies", 1955, "missamma", 1996, "prema desam", 2004, "boys");

    redis.zrange("movies", 0, -1, (err, result) => {
        console.log(result);
    })

    redis.zadd("movies", 1965, "mosagadu");

    redis.zrange("movies", 0, -1, "WITHSCORES", (err, result) => {
        console.log(result);
    })
}

export default SortedSets;