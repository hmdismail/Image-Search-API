Pre-requisite : Install Docker

1. set ENV in docker-compose ((already has been put for faster code evaluation))

      - SECRET_KEY=random secret string
      - UNSPLASH_AK=unsplash access key
      - UNSPLASH_SK=unsplash secret key
      - PIXABAY_AK=pixabay access key
      - STORYBLOCKS_PK=storyblocks public key
      - STORYBLOCKS_PRK=storyblocks private key

2. ```cd ``` into the folder and ```docker-compose up -d``` in the terminal
3. signup on http://127.0.0.1:4001/graphql

```
mutation {
   signup(username:"test" password:"test")
}
```
4. login to get authorization token on http://127.0.0.1:4001/graphql
```
mutation {
   login(username:"test" password:"test")
}
```
5. search with key and authorization on http://127.0.0.1:4001/graphql


6. logout to revoke authorization token on http://127.0.0.1:4001/graphql

# example

```
mutation {
  logout(authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Il9pZCI6IjVmYjljOGY5MjM0YTFhMDAxZmYzMDBiMCIsInVzZXJuYW1lIjoidGVzdCJ9LCJleHAiOjE2MDY2NzI3NTIsImlhdCI6MTYwNjA2Nzk1Mn0.4eLlbXkeAGqYMHguIZkOF_esRvNcY3Szdx6yHuviDx0")
}
```

### Graphql Query Example
```
query {
  search(key:"city" authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Il9pZCI6IjVmYjljOGY5MjM0YTFhMDAxZmYzMDBiMCIsInVzZXJuYW1lIjoidGVzdCJ9LCJleHAiOjE2MDY2NzI3NTIsImlhdCI6MTYwNjA2Nzk1Mn0.4eLlbXkeAGqYMHguIZkOF_esRvNcY3Szdx6yHuviDx0") {
    image_ID
    thumbnails
    preview
    title
    source
    tags
  }
}
```
