# response

### values

key name | value type | description
--- | --- | ---
isSuccess | boolean |
statusCode | number |
errorMessage | string | exists when fail
stack | string | exists when fail and debug
documentUrl | string | exists when fail
actualErrorMessage | string | exists when an error happens unexpectedly, the exact error message is `something happens unexpectedly.`

### headers

key name | value type | description
--- | --- | ---
X-Count | number | the number of requests in an hour
