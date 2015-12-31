# upload images to temperary directory

## url

`POST` {{ book.imageBaseUrl }}/api/temperary

### [headers](../request/headers.html)

### [cookies](../request/cookies.html)

### request body

array of files

### [response body](../response.html)

key name | value type
--- | ---
names | string[]

The name is something like `:uuid.png`, the extension name is same as the file name uploaded.

The actual url is `/tmp/:name`.
