'use strict';

// Setup:
//   npm install node-rest-client
// Usage:
//   node create_gitea_repos.js <repo name> <repo desc> [<gitea url>] [<user>] [<token>]

// You may put hardcoded values below instead of using last three arguments.
// Create a token in your user's settings at <gitea url>/user/settings/applications 
var url = process.argv[4] || '',
    user = process.argv[5] || '',
    token = process.argv[6] || '';

// See https://www.npmjs.com/package/node-rest-client
var Client = require('node-rest-client').Client;

// Use gitea user and token for authentication
var client = new Client({user: user, password: token});
var args = {
    data : { name: process.argv[2],
             description: process.argv[3] },
    headers: { "Content-Type": "application/json" }
};

client.post(url + '/api/v1/user/repos', args, function (data, response) {
    // Print parsed response body
    console.log(data);
});