---
title: "Increasing Triplet Subsequence"
date: "2026-05-19"
difficulty: "Medium"
published: true
tags:
  - Arrays
  - Greedy Algorithms
---

---

## Problem

Given an integer array `nums`, return `true` if there exists a triple of indices `(i, j, k)` such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

### Examples
```text
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```
```text
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
```
```text
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.
```

---
## Approach

We maintain two thresholds, `low` and `mid`, initialized to `INT_MAX`.

**The invariant**: if `mid` has been set to a real value, there is guaranteed to exist some element before it in the array that is less than it, which is our `low`.

For each element n:
- If `n <= low`, update `low = n`. We've found a new smallest candidate.
- Else if `n <= mid`, update `mid = n`. We have a valid `(low, mid)` pair.
- Else `n > mid`, a third value exceeding our pair exists. Return `true`.

If the loop ends without returning, no triplet exists. Return `false`.

---

## Time & Space Complexity

Since we are iterating across the array just once, the **time complexity is `O(n)`.**

We are only using two additional variables - `low` and `mid` - so the **space complexity is `O(1)`.**

---

## Code
```cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int mid = INT_MAX;
        int low = INT_MAX;
        for (auto n : nums){
            if (n <= low) low = n;
            else if (n <= mid) mid = n;
            else return true;
        }
        return false;
    }
};
```
---

## Why I Like This Problem

When you first look at this problem, an `O(n)` & `O(1)` solution feels impossible. But if you give it some thought, you realize that such a solution actually exists. I also love this problem because the solution is very simple to implement, being hardly 5 lines of code.

---

*Link to LeetCode problem: https://leetcode.com/problems/increasing-triplet-subsequence/*