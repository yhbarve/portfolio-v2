---
title: "Sort Colors"
date: "2026-05-30"
difficulty: "Medium"
published: true
tags:
  - Arrays
  - Magic
---

---

## Problem

Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively. Solve the question without using the standard `sort()` function.

---

## Examples
```text
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```
```text
Input: nums = [2,0,1]
Output: [0,1,2]
```

---
## Constraints
- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either 0, 1, or 2

---
## Approach

I'm sure you know what the brute-force approach is - just sort the array. But since we're not allowed to use the `sort()` function, we can implement a sorting algorithm. Quick Sort & Merge Sort are the most optimal. I'm not going to explain how these algorithms work; that's not the point of this question.

---

Let's instead look at a way to solve this in `O(n)` runtime. Introducing the **Dutch National Flag Algorithm.**

We will divide the array into four regions using three pointers: `low`, `mid`, and `high`. Here are the rules:
1. All the elements from index 0 to `low - 1` are **0s**.
2. All the elements from index `low` to `mid - 1` are **1s**.
3. All the elements from index `mid` to `high` are **unsorted**.
4. Finally, all the elements from index `high + 1` to the end of the array are **2s**.

Because the array is initially unsorted, we set `mid = 0` and `high = n - 1`, where `n` is the size of the array.
We also set `low = 0`, since the first two regions do not exist currently.

---

Now we begin scanning the element at index `mid`. There are three possible scenarios:
1. `nums[mid] = 0`: We will swap this number with `nums[low]` and increment `low` by 1. According to rule 1, `nums[low]` should be 1. Hence, swapping it with 0 and incrementing `low` by 1 does not break any rule. We also increment `mid` by 1 to move to the next element.
2. `nums[mid] = 1`: We just increment `mid` by 1. This way, the 1 we just noticed now is at index `mid - 1` which satisfies rule 2.
3. `nums[mid] = 2`: This time we swap this number with `nums[high]` and decrement `high` by 1. This way, we're in accordance with rules 3 & 4. We don't increment `mid` by 1 yet because we may need to deal with the swapped number first.

We stop once `mid = high`. This means that the unsorted region is eliminated, leaving us with a region of 0s, a region of 1s, and a region of 2s which is exactly what we wanted.

---

## Time & Space Complexity

Since we are iterating across the array just once, the **time complexity is `O(n)`.**

We are only using three additional variables - `low`, `mid`, and `high` - so the **space complexity is `O(1)`.**

---

## Code
```cpp
// cpp code
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int low = 0;
        int mid = 0;
        int high = nums.size() - 1;
        while (mid <= high){
            if (nums[mid] == 0){
                swap(nums[low], nums[mid]);
                low++;
                mid++;
            } else if (nums[mid] == 1){
                mid++;
            } else {
                swap(nums[mid], nums[high]);
                high--;
            }
        }
        return;
    }
};
```
---

## Why I Love This Problem

The Dutch National Flag Algorithm is not intuitive at all. There's no chance you can come up with this in an interview. But it certainly is one of the most clever algorithms I've seen. It works so elegantly, almost like magic! This is one algorithm that I'll never forget, not because how easy it is, but because how beautiful it is (if you understand what I mean)!

---

*Link to LeetCode problem: https://leetcode.com/problems/sort-colors/description/*