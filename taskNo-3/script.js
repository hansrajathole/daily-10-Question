//========================================================
function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Sample Input
let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums)); // Output: 3



//===================================================
function findFrequency(nums) {
    let frequencyMap = {};

    for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for (let key in frequencyMap) {
        console.log(`${key}-${frequencyMap[key]}`);
    }
}

// Sample Input
let nums = [1, 5, 3, 1, 3, 5, 6];
findFrequency(nums);



//======================================================
function thirdMax(nums) {
    let distinctNums = [...new Set(nums)]; // Remove duplicates
    distinctNums.sort((a, b) => b - a); // Sort in descending order

    if (distinctNums.length >= 3) {
        return distinctNums[2]; // Third distinct maximum
    } else {
        return distinctNums[0]; // Maximum number
    }
}

// Sample Input 1
let nums1 = [3, 2, 1];
console.log(thirdMax(nums1)); // Output: 1

// Sample Input 2
let nums2 = [2, 1];
console.log(thirdMax(nums2)); // Output: 2


//=====================================================
function minValueToBalance(nums) {
    let n = nums.length / 2;
    let leftSum = 0, rightSum = 0;

    for (let i = 0; i < n; i++) {
        leftSum += nums[i];
        rightSum += nums[i + n];
    }

    return Math.abs(leftSum - rightSum);
}

// Sample Input
let nums = [1, 2, 1, 2, 1, 3];
console.log(minValueToBalance(nums)); // Output: 2
