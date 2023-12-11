// console.log("chai aur codeeee");
require('dotenv').config()   //configure .env

const express = require('express')
const app = express()
const port = 4000

const gitHubData={
    "login": "HaiderRafi",
    "id": 116840159,
    "node_id": "U_kgDOBvbW3w",
    "avatar_url": "https://avatars.githubusercontent.com/u/116840159?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HaiderRafi",
    "html_url": "https://github.com/HaiderRafi",
    "followers_url": "https://api.github.com/users/HaiderRafi/followers",
    "following_url": "https://api.github.com/users/HaiderRafi/following{/other_user}",
    "gists_url": "https://api.github.com/users/HaiderRafi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HaiderRafi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HaiderRafi/subscriptions",
    "organizations_url": "https://api.github.com/users/HaiderRafi/orgs",
    "repos_url": "https://api.github.com/users/HaiderRafi/repos",
    "events_url": "https://api.github.com/users/HaiderRafi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HaiderRafi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Haider Rafi",
    "company": null,
    "blog": "",
    "location": "Delhi, India",
    "email": null,
    "hireable": null,
    "bio": "<h1>Busy In Making Web Applications</h1>",
    "twitter_username": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2022-10-27T19:01:05Z",
    "updated_at": "2023-11-08T19:29:14Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("<h1>Hello Twitter</h1>")
})

app.get('/login',(req,res)=>{
    res.send("please login with yout credentials")
})

app.get('/github',(req,res)=>{
    res.json(gitHubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})




// commit add by command base