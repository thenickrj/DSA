// Connected Components Count

/*
Write a function, connectedComponentsCount,
 that takes in the adjacency list of an undirected graph. 
 The function should return the number of connected components within the graph.
*/

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return false;

  visited.add(node);

  let size = 1;

  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

const graph = {
  0: [0, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

console.log(largestComponent(graph));
