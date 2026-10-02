class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var aux = new Set();
        for (var i = 0; i < nums.length; i++) {
            if (aux.has(nums[i])) {
                return true;
        } else {
            aux.add(nums[i]);
        }
    }
    return false;
    }
}
