const { createServer } = require('http');

const server = createServer((request, response) => {
  // Set CORS headers to allow requests from 'http://localhost:3000'
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    // Handle preflight requests
    response.writeHead(204);
    return response.end();
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({
    "0": {
      "id": 1,
      "text": "Give dog a bath",
      "isDone": true
    },
    "1": {
      "id": 2,
      "text": "Do laundry",
      "isDone": true
    },
    "2": {
      "id": 3,
      "text": "Feed cat",
      "isDone": true
    },
    "3": {
      "id": 4,
      "text": "Vacuum floor",
      "isDone": false
    },
    "4": {
      "id": 5,
      "text": "Go to Store",
      "isDone": true
    },
    "5": {
      "id": 6,
      "text": "Change light bulbs",
      "isDone": false
    },
    "6": {
      "id": 7,
      "text": "Fill gas tank",
      "isDone": true
    },
    "7": {
      "id": 8,
      "text": "Change linens",
      "isDone": false
    },
    "8": {
      "id": 9,
      "text": "Rake leaves",
      "isDone": true
    },
    "9": {
      "id": 10,
      "text": "Bake Cookies",
      "isDone": false
    },
    "10": {
      "id": 11,
      "text": "Take nap",
      "isDone": true
    },
    "11": {
      "id": 12,
      "text": "Read book",
      "isDone": true
    },
    "12": {
      "id": 13,
      "text": "Exercise",
      "isDone": false
    },
    "13": {
      "id": 14,
      "text": "Give dog a bath",
      "isDone": false
    },
    "14": {
      "id": 15,
      "text": "Do laundry",
      "isDone": false
    },
    "15": {
      "id": 16,
      "text": "Vacuum floor",
      "isDone": false
    },
    "16": {
      "id": 17,
      "text": "Feed cat",
      "isDone": true
    },
    "17": {
      "id": 18,
      "text": "Change light bulbs",
      "isDone": false
    },
    "18": {
      "id": 19,
      "text": "Go to Store",
      "isDone": false
    },
    "19": {
      "id": 20,
      "text": "Fill gas tank",
      "isDone": false
    }
  }));
  return response.end();
});

server.listen(8003);
