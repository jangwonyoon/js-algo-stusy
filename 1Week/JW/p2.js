/**
 * @param {number[]} nums
 * @return {number}
 */

 // 투포인터 문제
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    // 포인터를 초기화 한다.
    let j = 0;

    // 포인터에 차이를 둔다.
    // [0,0,1,1,1,2,2,3,3,4]
    // [0,1,1,1,2,2,3,3,4]

    for(let i = 1; i < nums.length; i++) {
        // 값이 같지 않다면, 포인터를 이동한다.
        if (nums[i] !== nums[j]) {
            j++;
            // 값이 같지 않기때문에 이전 요소를 새로운 값으로 바꿔준다.
            nums[j] = nums[i];
        }
    }

    // 중복이 제거된 배열의 길이는 j + 1이 된다.
    return j + 1;
};