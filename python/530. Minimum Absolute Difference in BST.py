# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    
    def getMinimumDifference(self, root):
        self.prev = -float('inf')
        self.minDiff = float('inf')

        def absDiff(node):
            if not node:
                return

            absDiff(node.left)
            if self.prev is not None:
                self.minDiff = min(self.minDiff, node.val - self.prev)
            
            self.prev = node.val
            absDiff(node.right)
        
        absDiff(root)
        return self.minDiff
            
