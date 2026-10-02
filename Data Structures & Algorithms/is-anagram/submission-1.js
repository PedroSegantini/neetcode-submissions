class Solution {
    /**
     * @param {string} s
     * @param {string} t, ==> not used
     * @return {boolean}
     */
    isAnagram(s, t) {
        var ordered_s = s.split('').sort().join('');
        var ordered_t = t.split('').sort().join('');

        if (ordered_s == ordered_t) {
            return true;
        } else {
            return false;
        }
    }
}