# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        result = set()
        def two_sum(root):
            if not root:
                return False
            
            if two_sum(root.left):
                return True
            
            complement = k - root.val
            if complement in result:
                return True
            result.add(root.val)
            return two_sum(root.right)
        
        return two_sum(root)
        
