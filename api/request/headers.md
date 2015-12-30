# headers

### values

key name | value type | required | description
--- | --- | --- | ---
X-Version | string | true | [semantic version](http://semver.org/)
Authorization | string | false | "token " + access_token

`Authorization` is required only when you access APIs by access token of OAuth2.

APIs support multiple versions, so `X-Version` header is required.

Use [get version api](../version.html) to see current version of api.
