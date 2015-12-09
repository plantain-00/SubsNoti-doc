# get scopes

## url

`GET` `/api/scopes`

### [headers](../request/headers.html)

### [response body](../response.html)

key name | value type
--- | ---
scopes | [Scope](#scope)[]

## scope

name | description
--- | ---
read:user | get current user
write:user | update current user
read:organization | get joined or created organizations
write:organization | create an organization; invite an user
read:theme | get themes of an organization
write:theme | create, update, watch, unwatch a theme
read:application | get registered or authorized applications
write:application | register, update, revoke an application, reset client secret
delete:application | delete an application
read:access_token | get access tokens
write:access_token | create, update an access token
delete:access_token | delete an access token
