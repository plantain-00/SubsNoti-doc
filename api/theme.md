# theme

### models

key name | value type
--- | ---
id | string
title | string
detail | string
organizationId | string
createTime | ISO 8601 time string
updateTime | ISO 8601 time string?
status | [ThemeStatus](theme/theme status.html)
creator | [User](./user.html)
owners | [User](./user.html)[]
watchers | [User](./user.html)[]
