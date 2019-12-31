# customize-cra DefinePlugin config

# usage

```js
// config-overrides.js
import { overridePassedProcessEnv } from "cra-define-override";

module.exports = override(
  overridePassedProcessEnv(["BASE_URL", "OTHER_ENV_NAME"])
);
```

then on your code

```js
// src/config.js

export default {
  baseUrl: process.env.BASE_URL || "https://default.fox.mn"
};
```

# ref link

- https://github.com/arackaf/customize-cra
- https://github.com/timarney/react-app-rewired
- https://github.com/facebook/create-react-app
