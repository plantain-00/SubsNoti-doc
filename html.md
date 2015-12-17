# html

## `/login_with_github`

### response

redirected to login page or authorization page of github.

## `/login_with_authentication_credential`

### parameters

name | description
--- | ---
authentication_credential | the authentication credential

### response cookies

name | description
--- | ---
authentication_credential | the authentication credential

### response

redirected to `/success.html`.

## `/github_code`

### response

redirected to `/success.html`.

## `/oauth/authorize`

### parameters

name | description
--- | ---
client_id | client id
scopes | scopes seperated by comma
state | random string
code | optional

### response

1. if not logged in, redirected to `/login.html`.
2. if not authorized, redirected to `/authorization.html`.
3. redirected to application with `code` and `state`.

## `/authorization.html`

### parameters

name | description
--- | ---
redirect_url | redirect url
scopes | scopes seperated by comma
code |

## `/error.html`

### parameters

name | description
--- | ---
message | the error message

## `/index.html`

## `/invite.html`

## `/login.html`

### parameters

name | description
--- | ---
redirect_url |

## `/new_organization.html`

## `/success.html`

### parameters

name | description
--- | ---
clear_previous_status | will clean the login result in session storage when is `√`
redirect_url |

## `/user.html`
