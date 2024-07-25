// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
// 𝑛
// 3
// n 
// 3
//  , the cube above will have volume of 
// (
// 𝑛
// −
// 1
// )
// 3
// (n−1) 
// 3
//   and so on until the top which will have a volume of 
// 1
// 3
// 1 
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
// 𝑛
// 3
// +
// (
// 𝑛
// −
// 1
// )
// 3
// +
// (
// 𝑛
// −
// 2
// )
// 3
// +
// .
// .
// .
// +
// 1
// 3
// =
// 𝑚
// n 
// 3
//  +(n−1) 
// 3
//  +(n−2) 
// 3
//  +...+1 
// 3
//  =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

/** Code */

function findNb(m) {
    // Initialize totalVolume to keep track of the sum of cube volumes
    let totalVolume = 0;

    // Start a for loop with n starting from 1 and incrementing indefinitely
    for (let n = 1;; n++) {
        // Add the volume of the current cube (n^3) to totalVolume
        totalVolume += Math.pow(n, 3);

        // Check if the accumulated volume equals the given volume m
        if (totalVolume === m) {
            // If it matches, return the current value of n
            return n;
        } else if (totalVolume > m) {
            // If the accumulated volume exceeds m, return -1 indicating no such n exists
            return -1;
        }
    }
}