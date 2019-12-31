# customize-cra DefinePlugin config

# usage

```shell
npm i -D cra-define-override

```

```js
// config-overrides.js
const { overridePassedProcessEnv } = require("cra-define-override");

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

---

custom usage

```js
// config-overrides.js
const { overrideProcessEnv, getEnvToDefine } = require("cra-define-override");

const passedBuildEnvs = getEnvToDefine(["BASE_URL", "OTHER_ENV_NAME"]);

module.exports = override(
  overrideProcessEnv({
    VERSION: JSON.stringify(require("./package.json").version),
    ...passedBuildEnvs
  })
);
```

# ref link

- https://github.com/arackaf/customize-cra
- https://github.com/timarney/react-app-rewired
- https://github.com/facebook/create-react-app
