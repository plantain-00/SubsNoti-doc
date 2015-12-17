# create an access token for application

## url

`POST` `/api/access_tokens`

### [headers](../request/headers.html)

### request body

key name | value type | required | description
--- | --- | --- | ---
clientId | string | true |
clientSecret | string | true |
state | string | true | random string
code | string | true |

### [response body](../response.html)

key name | value type
--- | ---
accessToken | string
