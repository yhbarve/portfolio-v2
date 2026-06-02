---
title: "Majority Element"
date: "2026-06-01"
difficulty: "Easy"
published: true
tags:
  - Arrays
  - Magic
---

---

## Problem

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

---

## Examples
```text
Input: nums = [3,2,3]
Output: 3
```
```text
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

---
## Constraints
- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

---
## Approach

The brute force approach is very obvious. We can use a hash-map to get the frequency of each element. Next, we traverse the hash-map and find the most-frequent element. However, this approach requires a hash-map. In the worst case, we may have to store all the elements in the hash-map. Therefore, the space complexity of this solution is `O(n)`.

---

Can we do better than `O(n)` space complexity? Of course, we can! Introducing the **Boyer-Moore Voting Algorithm.**

Let's define two variables `cur` and `count`. We then traverse the array. For each element `x`:
1. If `x == cur`, increment `count` by 1.
2. Otherwise, decrement `count` by 1.
3. At any point, if `count = 0`, we know that there is no majority element until this point. We then reset `cur` to the current element and `count` to 1. Repeat steps 1 & 2 for the remaining elements.

After traversing the entire array, `cur` will be the majority element in the array.

---

## Time & Space Complexity

Since we are iterating across the array just once, the **time complexity is `O(n)`.**

We are only using two additional variables - `cur` & `count` - so the **space complexity is `O(1)`.**

---

## Code
```cpp
// cpp code
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int cur = nums[0];
        int count = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            if (count == 0) {
                cur = nums[i];
                count = 1;
            } else if (nums[i] == cur) {
                count++;
            } else {
                count--;
            }
        }
        return cur;
    }
};
```
---

## Why I Love This Problem

This is one of those problems where you can settle for the brute-force approach because it is already quite efficient. But just a little more brainstorming leads to an incredibly elegant, optimal approach.

---

*Link to LeetCode problem: https://leetcode.com/problems/majority-element/*