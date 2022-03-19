import Redis from "ioredis";
import Strings from "./strings.js";
import Hashes from "./hashes.js";
import Lists from "./lists.js";
import Sets from "./sets.js";
import Sortedsets from "./sortedsets.js";

//const redis = new Redis({ password: process.env.API_KEY});
const redis = new Redis();

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
Sortedsets(redis);