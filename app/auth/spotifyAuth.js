const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://localhost:8888/callback';

function setupSpotifyAuth() {
    const app = express();

    app.get('/login', function(req, res) {
        // ... [Existing login route logic]
    });

    app.get('/callback', async function(req, res) {
        // ... [Existing callback route logic]
    });

    app.listen(8888, () => console.log('Auth server listening on port 8888!'));
}

module.exports = setupSpotifyAuth;
