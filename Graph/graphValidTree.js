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

  // true case
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'D');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'E');

  // false case
  // graph.addEdge('0', '1');
  // graph.addEdge('1', '2');
  // graph.addEdge('2', '3');
  //  graph.addEdge('1', '3');

  //console.log(graph);
  return graph;
}

function dfs (graph, node, parent, visited) {
  if (visited[node]) {
    return false;
  }

  visited[node] = true;

  for (let i = 0; i < graph.vertices[node].length; i++) {
    if (graph.vertices[node][i] === parent) continue;

    if (!dfs(graph, graph.vertices[node][i], node, visited)) {
      return false;
    }
  }

  return true;
}


let graph = buildGraph();
console.log(dfs(graph, 'A', null, {}));