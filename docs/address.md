# Address API Spec

## Create Address API

Endpoint : Post /api/contacts/:contact_id/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jalan soekarno hatta",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postal_code": "12312"
}
```

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan soekarno hatta",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "12312"
  }
}
```

Request Body Error :

```json
{
  "errors": "country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contact_id/addresses/:address_id

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jalan soekarno hatta",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postal_code": "12312"
}
```

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan soekarno hatta",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "12312"
  }
}
```

Request Body Error :

```json
{
  "errors": "country is required"
}
```

## Get Address API

Endpoint : Post /api/contacts/:contact_id/addresses/:address_id

Headers :

- Authorization : token

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan soekarno hatta",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "12312"
  }
}
```

Request Body Error :

```json
{
  "errors": "address is not found"
}
```

## List Address API

Endpoint : Post /api/contacts/:contact_id/addresses

Headers :

- Authorization : token

Query Params :

- page : number of page, default 1
- size : size per page, default 10

Request Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan soekarno hatta",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postal_code": "12312"
    },
    {
      "id": 2,
      "street": "Jalan soekarno hatta",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postal_code": "12312"
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
  "errors": "contact is not found"
}
```

## Remove Address API

Endpoint : Post /api/contacts/:contact_id/addresses/:address_id

Headers :

- Authorization : token

Request Body Success :

```json
{
  "data": "OK"
}
```

Request Body Error :

```json
{
  "errors": "Address is not found"
}
```
