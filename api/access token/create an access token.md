# create an access token

## url

`POST` `/api/user/access_tokens`

### [headers](../request/headers.html)

### [cookies](../request/cookies.html)

### request body

key name | value type | required
--- | --- | ---
description | string | true
scopes | string[] | true

### [response body](../response.html)

key name | value type
--- | ---
accessToken | string
