# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "riymuh",
  "password": "password",
  "name": "Riyadh Muhammad"
}
```

Request Body Success :

```json
{
  "data": {
    "username": "riymuh",
    "name": "Riyadh Muhammad"
  }
}
```

Request Body Error :

```json
{
  "errors": "username already used"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "riymuh",
  "password": "password"
}
```

Request Body Success :

```json
{
  "data": {
    "username": "riymuh",
    "name": "Riyadh Muhammad",
    "token": "123456"
  }
}
```

Request Body Error :

```json
{
  "errors": "username or password invalid"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "Muhammad Riyadh", //optional
  "password": "new password" //optional
}
```

Request Body Success :

```json
{
  "data": {
    "name": "Muhammad Riyadh"
  }
}
```

Request Body Error :

```json
{
  "errors": "username or password invalid"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Request Body Success:

```json
{
  "data": {
    "name": "Muhammad Riyadh",
    "username": "riymuh"
  }
}
```

Request Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : GET /api/users/logout

Headers :

- Authorization : token

Request Body Success :

```json
{
  "data": "You're logout"
}
```

Request Body Error :

```json
{
  "errors": "Unauthorized"
}
```
