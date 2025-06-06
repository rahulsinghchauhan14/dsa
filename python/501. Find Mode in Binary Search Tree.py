# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    prev = None
    max_count = 0
    current_count = 0
    result = []

    def findMode(self, root):
        self.dfs(root)
        return self.result

    def dfs(self, node):
        if node:
            self.dfs(node.left)
            self.current_count = 1 if node.val != self.prev else self.current_count + 1
            if self.current_count == self.max_count:
                self.result.append(node.val)
            elif self.current_count > self.max_count:
                self.result = [node.val]
                self.max_count = self.current_count
            self.prev = node.val
            self.dfs(node.right)
            



        
