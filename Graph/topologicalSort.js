let _ = require("lodash");

// Undirected Graph
class Graph {
  constructor() {
    this.vertices = {};
  }

  addEdge (v1, v2) {
    if (!this.vertices[v1]) {
      this.vertices[v1] = [];
    }

    if (!this.vertices[v2]) {
      this.vertices[v2] = [];
    }

    this.vertices[v1].push(v2);
    //    this.vertices[v2].push(v1);
  }
}

function buildGraph () {
  let graph = new Graph();

  graph.addEdge(5, 2);
  graph.addEdge(5, 0);
  graph.addEdge(4, 0);
  graph.addEdge(4, 1);
  graph.addEdge(2, 3);
  graph.addEdge(3, 1);

  //console.log(graph);
  return graph;
}

function topologicalSort (vertices, node, visited, stack) {
  if (visited[node]) {
    return;
  }

  visited[node] = true;

  for (let i = 0; i < vertices[node].length; i++) {
    let el = vertices[node][i];
    if (!visited[el]) {
      topologicalSort(vertices, el, visited, stack);
    }
  }

  stack.push(node);
}

function topologicalSortUtil (graph) {
  let visited = {},
    stack = [];
  for (let i = 0; i < 6; i++) {
    topologicalSort(graph.vertices, i, visited, stack)
  }

  // topological sort will print here..
  console.log(stack.reverse())
}

let graph = buildGraph(8);
topologicalSortUtil(graph);


