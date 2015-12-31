# send token via email

will send a link with it to the given email.

## url

`POST` {{ book.apiBaseUrl }}/api/tokens

### [headers](../request/headers.html)

### request body

key name | value type | required
--- | --- | ---
email | string | true
name | string | false
guid | string | true
code | string | true
redirectUrl | string | false

### [response body](../response.html)

key name | value type | description
--- | --- | ---
url | string | only appears in test environment
