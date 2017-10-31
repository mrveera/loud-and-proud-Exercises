let matchTheFollowing = require('./matchTheFollowing');
const fs = require('fs');
let firstHalf =fs.readFileSync('match_data/match_large_1.txt','utf-8');
let secondHalf =fs.readFileSync('match_data/match_large_2.txt','utf-8');

firstHalf= firstHalf.trim().split('\n');
secondHalf=secondHalf.trim().split('\n');

console.log(matchTheFollowing(firstHalf,secondHalf));
