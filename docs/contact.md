# Contact API Spec

## Create Contact API

Endpoint : PATCH /api/contacts/current

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "riyadh",
  "last_name": "muhammad",
  "email": "mriyadh103@gmail.com",
  "phone": "08172615223"
}
```

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "riyadh",
    "last_name": "muhammad",
    "email": "mriyadh103@gmail.com",
    "phone": "08172615223"
  }
}
```

Request Body Error :

```json
{
  "errors": "email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "riyadh",
  "last_name": "muhammad",
  "email": "mriyadh103@gmail.com",
  "phone": "08172615223"
}
```

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "riyadh",
    "last_name": "muhammad",
    "email": "mriyadh103@gmail.com",
    "phone": "08172615223"
  }
}
```

Request Body Error :

```json
{
  "errors": "email is not valid"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "riyadh",
    "last_name": "muhammad",
    "email": "mriyadh103@gmail.com",
    "phone": "08172615223"
  }
}
```

Request Body Error :

```json
{
  "errors": "contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts/current

Headers :

- Authorization : token

Query Params :

- name : search by first name or last name using like, optional
- email : search by email using like, optional
- phone : serach by phone number using like, optional
- page : number of page, default 1
- size : size per page, default 10

Request Body Success:

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "riyadh",
      "last_name": "muhammad",
      "email": "mriyadh103@gmail.com",
      "phone": "08172615223"
    },
    {
      "id": 2,
      "first_name": "riyadh",
      "last_name": "muhammad",
      "email": "mriyadh103@gmail.com",
      "phone": "08172615223"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Request Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

- Authorization : token

Request Body Success :

```json
{
  "data": "Ok"
}
```

Request Body Error :

```json
{
  "errors": "contact is not found"
}
```
