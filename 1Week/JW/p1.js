// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

// 88. Merge Sorted Array

/**
 * 시간 복잡도 O((n + m) log(n + m))
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const firstArr = nums1.slice(0, m);
    const secondArr = nums2.slice(0, n);

    const result = [...firstArr, ...secondArr].sort((a, b) => a - b);

    result.forEach((el, idx) => nums1[idx] = el);
};