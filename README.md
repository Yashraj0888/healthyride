# Users API
## `/users/register` endpoint
## Register Endpoint

### Description

Creates a new user account.

### Status Codes

* 201 Created: User account created successfully.
* 400 Bad Request: Validation errors or invalid request data.
* 422 Unprocessable Entity: Validation errors or invalid request data.
* 500 Internal Server Error: Server error occurred while processing the request.
* 401 Unauthorized: Authentication failed or invalid credentials provided.

### Request Body

The request body should include the following data:

* `email`: The user's email address. This field is required and must be a valid string formatted as an email address.
* `password`: The user's password. This field is required and must be a string that meets the application's security criteria (e.g., minimum length, complexity).
* `fullname`: The user's full name. This is a required field and should be an object containing:
  * `firstname`: The user's first name (required, string).
  * `lastname`: The user's last name (required, string).


```

{
  "email": "john.doe@example.com",
  "password": "mysecretpassword",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}