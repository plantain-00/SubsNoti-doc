# create a theme

## url

`POST` {{ book.apiBaseUrl }}/api/themes

### [headers](../request/headers.html)

### [cookies](../request/cookies.html)

### request body

key name | value type | required
--- | --- | ---
themeTitle | string | true
themeDetail | string | false
organizationId | number | true
imageNames | string[] | false

The `imageNames` is uploaded images in `themeDetail`, it exists to avoid extracting image url from `themeDetail`.

### [response body](../response.html)
