// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 투포인터
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let slow = 0;

    for (fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++
        }
    }

    return slow;
};