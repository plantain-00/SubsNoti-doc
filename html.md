# html

## {{ book.apiBaseUrl }}/login_with_github

### response

redirected to login page or authorization page of github.

## {{ book.apiBaseUrl }}/login_with_authentication_credential

### parameters

name | description
--- | ---
authentication_credential | the authentication credential

### response cookies

name | description
--- | ---
authentication_credential | the authentication credential

### response

redirected to {{ book.apiBaseUrl }}/success.html.

## {{ book.apiBaseUrl }}/github_code

### response

redirected to {{ book.apiBaseUrl }}/success.html.

## {{ book.apiBaseUrl }}/oauth/authorize

### parameters

name | description
--- | ---
client_id | client id
scopes | scopes seperated by comma
state | random string
code | optional

### response

1. if not logged in, redirected to {{ book.apiBaseUrl }}/login.html.
2. if not authorized, redirected to {{ book.apiBaseUrl }}/authorization.html.
3. redirected to application with `code` and `state`.

#### [for test environment](./api/response.html)

name | type | description
--- | --- |
pageName | string | `login`, `authorization` or null
code | string |

## {{ book.apiBaseUrl }}/authorization.html

### parameters

name | description
--- | ---
redirect_url | redirect url
scopes | scopes seperated by comma
code |
application_id | the id of the application

## {{ book.apiBaseUrl }}/error.html

### parameters

name | description
--- | ---
message | the error message

## {{ book.apiBaseUrl }}/index.html

## {{ book.apiBaseUrl }}/invite.html

## {{ book.apiBaseUrl }}/login.html

### parameters

name | description
--- | ---
redirect_url | redirect url

## {{ book.apiBaseUrl }}/new_organization.html

## {{ book.apiBaseUrl }}/success.html

### parameters

name | description
--- | ---
clear_previous_status | will clean the login result in session storage when is `√`
redirect_url | redirect url

## {{ book.apiBaseUrl }}/user.html

## {{ book.apiBaseUrl }}/authorized.html

## {{ book.apiBaseUrl }}/access_tokens.html

## {{ book.apiBaseUrl }}/registered.html
