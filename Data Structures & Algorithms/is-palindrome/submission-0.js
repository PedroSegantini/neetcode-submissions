class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var s_Lower = s.toLowerCase();
        var s_Normalized = s_Lower.replace(/[\W_]/g, '');
        var reverse_string = s_Normalized.split('').reverse().join('');
        if (s_Normalized == reverse_string) {
            return true;
        } else {
            return false;
        }
    }
}
