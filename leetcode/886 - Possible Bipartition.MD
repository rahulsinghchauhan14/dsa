# question


```
We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.

Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.
```
 

Example 1:

Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4] and group2 [2,3].
Example 2:

Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false


# solution:
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 
```
var possibleBipartition = function(n, dislikes) {
   const adjList = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    adjList[i] = [];
  }
  for (const [a, b] of dislikes) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  // Use an array to store the group each person is in (0 or 1)
  const groups = new Array(n + 1).fill(null);

  // Perform a depth-first search on each person, starting from person 1
  for (let i = 1; i <= n; i++) {
    // If this person has already been assigned to a group, skip them
    if (groups[i] !== null) continue;

    // Use a stack to perform the depth-first search
    const stack = [i];
    groups[i] = 0;
    while (stack.length > 0) {
      const person = stack.pop();
      for (const disliked of adjList[person]) {
        if (groups[disliked] === null) {
          // Assign this person to the opposite group of the person they dislike
          groups[disliked] = 1 - groups[person];
          stack.push(disliked);
        } else if (groups[disliked] === groups[person]) {
          // If this person is in the same group as the person they dislike, it is not possible to split into groups
          return false;
        }
      }
    }
  }

  // If we have successfully assigned everyone to a group, return true
  return true;
};
```

## more efficient

```
var dfs = function(a_list, groups, vertex, grp) {
    //  console.log(groups, vertex, grp)
     if(groups[vertex] == -1) {
         groups[vertex] = grp;
     } else {
         return groups[vertex] === grp;
     }

     for(let n of a_list[vertex]) {
         if(!dfs(a_list, groups, n, 1-grp)) {
             return false;
         }
     }
     return true;

 }
var possibleBipartition = function(n, dislikes) {
    // create adjacency list
    let adj_list = Array(n);
    let group = Array(n).fill(-1);
    for(let i=0; i<n; i++) {
        adj_list[i] = [];
    }
    for(let pair of dislikes) {
        adj_list[pair[0]-1].push(pair[1]-1);
        adj_list[pair[1]-1].push(pair[0]-1);
    }
    // console.log(adj_list);
    for(let i=0; i<n; i++) {
        if(group[i] == -1 && !(dfs(adj_list, group, i, 0))) {
            return false;
        }
    }
        return true;

    
};
```
