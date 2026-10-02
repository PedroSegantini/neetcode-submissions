class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var hash = new Map();
        for (var i = 0; i < nums.length; i++) {
            var sub = target - nums[i];
            var teste = hash.get(sub);
            if (teste != null) {
                return [teste, i];
            }
            hash.set(nums[i], i);
        }
    }
}