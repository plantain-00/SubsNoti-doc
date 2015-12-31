# create a captcha

## url

`POST` {{ book.apiBaseUrl }}/api/captchas

### [headers](../request/headers.html)

### request body

key name | value type | required
--- | --- | ---
id | string | true

### [response body](../response.html)

key name | value type | description
--- | --- | ---
url | string | the base64 url of image
code | string | only appears at test environment
