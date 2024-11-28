// 169. Majority Element

/**
 * 풀이 1
 * 시간 복잡도 O(n)
 * 공간 복잡도 O(n) - 객체를 사용했기 때문에 O(n)이다.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    let result = 0;

    // 예외 처리
    if (nums.length === 0) {
        return result;
    }

    // 빈도 수를 위한 배열 생성
    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }

    // 배열을 순회하여 majority Element 값을 구하기
    for (const [key, value] of Object.entries(obj)) {
        if (value > nums.length / 2) {
            result = Number(key);
        }
    }

    return result;
};

/**
 * 풀이 2
 * 시간 복잡도 O(n)
 * 공간 복잡도 O(1)
 * Boyer-Moore Voting Algorithm - 과반수 투표 알고리즘
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null; // 후보
    let count = 0; // 후보의 카운트

    // 후보 찾기
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
