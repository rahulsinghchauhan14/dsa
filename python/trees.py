class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

# The maximum depth (or height) of a binary tree is the number of nodes along the longest path from the root node down to the furthest leaf node.
def findHeight(root):
    if root is None:
        return -1
    left_height = findHeight(root.left)
    right_height = findHeight(root.right)
    return 1 + max(left_height, right_height)

def inorder(root):
    if root:
        inorder(root.left)
        print(root.key, end =' ')
        inorder(root.right)

def pre_order(root):
    if root:
        print(root.key, end=' ')
        pre_order(root.left)
        pre_order(root.right)

def post_order(root):
    if root:
        post_order(root.left)
        post_order(root.right)
        print(root.key, end=' ')

def insert(root, key):
    if root is None:
        return Node(key)
    if key < root.key:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root

def check_balance(root):
    # below function is helper function
    def height_and_balance(node):
        if not node:
            return 0, True
        
        left_height, left_balanced = height_and_balance(node.left)
        right_height, right_balanced = height_and_balance(node.right)

        height = 1 + max(left_height, right_height)

        balanced = (left_balanced and right_balanced and abs(left_height - right_height) <= 1)

        return height, balanced
    
    _, is_balanced = height_and_balance(root)
    return is_balanced


# A leaf node in a binary tree is a node that does not have any children (both left and right children are None).
def count_leaf_node(root):
    if not root:
        return 0
    # if the current node is a leaf node
    if not root.left and not root.right:
        return 1
    
    left_count = count_leaf_node(root.left)
    right_count = count_leaf_node(root.right)

    return left_count + right_count
    
# A mirror image of a binary tree is a tree where left and right children of every node are swapped. In other words, the mirror of a binary tree is obtained by flipping the tree around its root.
def mirror_tree(root):
    if not root:
        return None
    
    root.left, root.right = root.right, root.left

    mirror_tree(root.left)
    mirror_tree(root.right)

    return root


# A binary tree is symmetric if it is a mirror image of itself. In other words, the left subtree is a mirror reflection of the right subtree.
def is_mirror(left, right):
    
    # Both nodes are None: symmetric
    if not left and not right:
        return True

    # One of them is None: not symmetric
    if not left or not right:
        return False
    
    # Check values and recurse for left and right children
    return (left.value == right.value and is_mirror(left.left, right.right) and is_mirror(left.right, right.left) )

def is_symmetric(root):
    if not root:
        return True
    
    return is_mirror(root.left, root.right)

def sum_of_left_leaves(root):
    if not root:
        return 0
    
    total_sum = 0
    # Check if the left child is a leaf
    if root.left and not root.left.left and not root.left.right:
        total_sum += root.left.key

    # Recursively find the sum of left leaves in left and right subtrees
    total_sum += sum_of_left_leaves(root.left)
    total_sum += sum_of_left_leaves(root.right)

    return total_sum



root = None
keys = [5, 10, 2, 30, 15, 3, 9, 1, 20, 8, 6, 4, 7]
for key in keys:
    root = insert(root, key)

print("In Order:", inorder(root))

print("Height:", findHeight(root))

print("is Balance:", check_balance(root))

print("Left leaf sum:", sum_of_left_leaves(root))
