---
title: "Detect Cycle in a Linked List"
date: "2026-06-09"
difficulty: "Easy"
published: true
tags:
  - Linked List
---

---

## Problem

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` *if there is a cycle in the linked list*. Otherwise, return `false`.

---

## Examples
```text
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```
```text
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```
```text
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

---
## Constraints
- The number of the nodes in the list is in the range `[0, 10^4]`.
- `10^5 <= Node.val <= 10^5`
- `pos` is `1` or a **valid index** in the linked-list.

---
## Approach

Let's look at two ways of solving this problem. First, the brute force approach:
- Initialize a hash set to track if a node has been visited before.
- Start at `head` and keep moving ahead until we reach the end of the list (nullptr) or land on a node that's already in our set.

This is pretty easy to code, so I'm trusting that you can do it by yourself!

Quickly, let's discuss the time and space complexity. Because we may have to visit all the nodes once in the worst case, the time complexity is $O(n)$. Similarly, because we need to store the memory addresses of the nodes we've seen, the space complexity is also $O(n)$. This space usage is the main bottleneck.

---

Let's now look at the more interesting, optimal approach: Floyd's Tortoise and Hare Algorithm.
- **Initialize**: Create two pointers, `slow` and `fast`, both pointing to `head` initially.
- **Traverse**: In each step, the slow pointer moves forward by 1 node, while the fast pointer hops ahead by 2 nodes.
- **Terminate**: We keep looping until one of two things happens:
    - `fast` (or `fast->next`) reaches the end of the list (`nullptr`). This means the list is linear and contains no cycles.
    - `fast` lands on the exact same node as `slow`. This is mathematically guaranteed to happen if a loop exists, as the `fast` pointer closes the gap by 1 node each step.

---

## Time & Space Complexity

By eliminating the hash set, we drop our **space complexity to a perfect $O(1)$**.

**The time complexity is still $O(n)$**, because fast will catch slow within a few laps of the cycle at most.

---

## Code
```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == nullptr || head->next == nullptr) return false;
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast != nullptr && fast->next != nullptr){
            fast = fast->next->next;
            slow = slow->next;
            if (fast == slow) return true;
        }
        return false;
    }
};
```
---

## Why I Like This Problem

When I first learned about the Tortoise and Hare Algorithm, I was stunned! It's such a smart way to solve this problem. Even though this problem in isolation is pretty easy to solve (using the brute force approach), it turns out that the fast/slow pointer approach is a versatile pattern used in many other coding problems, making it an incredibly useful tool to have in your armor.

---

*Link to LeetCode problem: https://leetcode.com/problems/linked-list-cycle/description/*