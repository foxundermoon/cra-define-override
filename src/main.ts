import { Plugin, DefinePlugin, Configuration } from "webpack";

type WithPropertiesDefinePlugin = DefinePlugin & { [key: string]: any };

export const findWebpackPlugin = (plugins: Array<Plugin>, pluginName: string) =>
  plugins.find(plugin => plugin.constructor.name === pluginName);

export const overrideProcessEnv = (value: { [key: string]: string }) => (
  config: Configuration
) => {
  const plugin = findWebpackPlugin(
    config.plugins,
    "DefinePlugin"
  ) as WithPropertiesDefinePlugin;
  const processEnv = plugin.definitions["process.env"] || {};

  plugin.definitions["process.env"] = {
    ...processEnv,
    ...value
  };

  return config;
};

const getEnvToDefine = (envNames: Array<string>) =>
  envNames.reduce((a, c) => {
    a[c] = JSON.stringify(process.env[c]);
    return a;
  }, {});

export const overridePassedProcessEnv = (names: Array<string>) =>
  overrideProcessEnv(getEnvToDefine(names));
