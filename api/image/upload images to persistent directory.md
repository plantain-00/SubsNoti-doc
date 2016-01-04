# upload images to persistent directory

## url

`POST` {{ book.uploadBaseUrl }}/api/persistent

### [headers](../request/headers.html)

### request body

array of files

fieldname is ultimate file name.

### [response body](../response.html)

key name | value type
--- | ---
names | string[]
