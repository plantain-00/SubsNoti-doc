# response

### values

key name | value type | description
--- | --- | ---
status | number | 0: success generally; 1: fail generally;
errorMessage | string | exists when fail
stack | string | exists when fail and debug
documentUrl | string | exists when fail

### headers

key name | value type | description
--- | --- | ---
X-Count | number | the number of requests in an hour
