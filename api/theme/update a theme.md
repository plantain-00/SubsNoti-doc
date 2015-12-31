# update a theme

## url

`PUT` {{ book.apiBaseUrl }}/api/themes/:theme_id

### [headers](../request/headers.html)

### [cookies](../request/cookies.html)

### request body

key name | value type | required
--- | --- | ---
title | string | false
detail | string | false
status | [ThemeStatus](./theme status.html) | false
imageNames | string[] | false

The `imageNames` is uploaded images in `themeDetail`, it exists to avoid extracting image url from `themeDetail`.

### [response body](../response.html)
