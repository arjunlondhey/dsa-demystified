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
    this.vertices[v2].push(v1);
  }
}

function buildGraph () {
  let graph = new Graph();

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'D');
  graph.addEdge('A', 'E');
  graph.addEdge('B', 'C');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'F');
  graph.addEdge('E', 'C');
  graph.addEdge('C', 'F');
  graph.addEdge('G', 'K');

  //console.log(graph);
  return graph;
}

function dfs (vertices, node, visited) {
  if (visited[node]) {
    return;
  }

  // Print dfs traversal here.
  console.log(node);
  if (!visited[node]) {
    visited[node] = true;
  }

  for (let i = 0; i < vertices[node].length; i++) {
    dfs(vertices, vertices[node][i], visited);
  }
}

function dfsUtil (graph) {
  let visited = {};
  for (let i = 0; i < 8; i++) {
    dfs(graph.vertices, _.keys(graph.vertices)[i], visited)
  }
}

let graph = buildGraph(8);
dfsUtil(graph);
