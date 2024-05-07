// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

/** Code */
// Function to delete elements from an array that appear more than n times
function deleteNth(arr, n) {
    // Create a Map to store the frequency of each element
    const freqMap = new Map();
    // Initialize an empty array to store the result
    const result = [];
    
    // Iterate through the elements of the input array
    for (const num of arr) {
        // Get the current frequency of the element from the Map, defaulting to 0 if not found
        const freq = freqMap.get(num) || 0;
        // If the frequency is less than the limit n, include the element in the result
        if (freq < n) {
            result.push(num); // Add the element to the result
            freqMap.set(num, freq + 1); // Increment the frequency of the element in the Map
        }
    }
    
    // Return the resulting array with each element appearing at most n times
    return result;
}
