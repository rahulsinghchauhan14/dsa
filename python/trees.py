class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

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


# root = Node(1)
# root.left = Node(2)

root = None
keys = [5,10,2,30]
for key in keys:
    root = insert(root, key)

print("In Order:", inorder(root))

print("Height:", findHeight(root))

print("is Balance:", check_balance(root))
