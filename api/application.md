# application

### models

key name | value type | description
--- | --- | ---
id | string |
name | string |
homeUrl | string |
description | string |
authorizationCallbackUrl | string | appears only in registered applications
clientId | string | appears only in registered applications
clientSecret | string | appears only in registered applications
creator | [User](#user) | appears only in authorized applications and in getting an application
scopes | [Scope](./scope.html) | appears only in authorized applications
lastUsed | ISO 8601 time string | appears only in authorized applications
