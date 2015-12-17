# update an application

## url

`PUT` `/api/user/registered/:application_id`

### [headers](../request/headers.html)

### [cookies](../request/cookies.html)

### request body

key name | value type | required
--- | --- | ---
name | string | true
homeUrl | string | true
description | string | false
authorizationCallbackUrl | string | true

### [response body](../response.html)
