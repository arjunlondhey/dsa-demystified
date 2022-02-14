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

function bfs (vertices, node, visited) {
  let queue = [];

  queue.push(node);

  while (queue.length > 0) {
    let top = queue.shift(); // Q.dequeue()

    if (visited[top]) {
      continue;
    }

    visited[top] = true;
    console.log(top);

    for (let i = 0; i < vertices[node].length; i++) {
      let el = vertices[node][i];
      if (!visited[el]) {
        queue.push(vertices[node][i]);
      }
    }
  }
}

function bfsUtil (graph) {
  let visited = {};

  for (let i = 0; i < 8; i++) {
    bfs(graph.vertices, _.keys(graph.vertices)[i], visited)
  }
}

let graph = buildGraph(8);
bfsUtil(graph);